import React, {useState, useEffect} from 'react'
import {Map as LeafMap, Marker, Popup, TileLayer } from 'react-leaflet'
import {forEach, findIndex} from 'lodash'
import {Form, Row, Col, Container} from 'react-bootstrap'

import recycleShopConstant from './recycleShopConstant'
import {sustainableShopsConstant, getIcon} from './sustainableShopConstant'
import recycleShopsConstants from './recycleShopConstant'
import {getLocationDetailByGeoCodes} from './mapApiHelper';
import PopupComponent from './PopupComponent';

 const centerPosition = [28.62709, 77.05001];

const App = () => {
  const [recycleShopEnable, setRecycleShopEnable] = useState(false);
  const [sustainableShopEnable, setSustainableShopEnable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  let markersForRecycleShops = [];
  let markersForSustainableShops = [];
  const shopDetailsMap = new Map();

  useEffect(()=>{
    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCurrentLocation([position.coords.latitude, position.coords.longitude])
      });
    }
    forEach(sustainableShopsConstant, async (position) => {
        console.log("hitting position", position);
        let keys = Object.keys(localStorage);
        if (findIndex(keys, (key)=> key === `${position[0][0]}_${position[0][1]}`) < 0){
          const result = await getLocationDetailByGeoCodes(position[0][0], position[0][1]);
        console.log("result inapp",result);
        if (result && result.name && result.display_name && !result.err) {
          console.log("fetched data", result)
          shopDetailsMap.set(`${position[0][0]}_${position[0][1]}`, result);
          localStorage.setItem(`${position[0][0]}_${position[0][1]}`, JSON.stringify(result));
        } else {
          console.log("error fetching details");
      }
        }
        
    })
   
  },[])

  const handleOnClickSustainbleShop = (event) =>{
    setSustainableShopEnable(event.target.checked)
  
  }

  const handleOnClickRecycleShop = (event) => {
   setRecycleShopEnable(event.target.checked)
  }

  (forEach(sustainableShopsConstant, (position) =>{
    const shopDetail = localStorage.getItem(`${position[0][0]}_${position[0][1]}`)
    let shopDetailParser;
    if (shopDetail){
      shopDetailParser = JSON.parse(shopDetail);
      markersForSustainableShops.push(<Marker position={position[0]} icon={position[1][0]? getIcon(position[1][0]): ''}>
       <PopupComponent shopDetailParser={shopDetailParser} />
      </Marker>);
    }
 
 
 }));
  (forEach(recycleShopConstant, (position) =>{
    markersForRecycleShops.push( <Marker position={position} >
     <Popup>
        <span>Coming soon ...</span>
      <br/>
        <span>Coming soon ...</span><br/>
     </Popup>
   </Marker>);
   
   }));
  

  return (
    
    <Container>
    <Form>
      <Row>
       <div>Tick to view recyle or sustainable shops around you.</div>
      </Row>
      <Row>
        
        <Col><Form.Check type="checkbox">
        <Form.Check.Input onClick={handleOnClickSustainbleShop} type="checkbox" isValid />
        <Form.Check.Label>Sustainable Shop</Form.Check.Label>
      </Form.Check>
     </Col><Col> <Form.Check type="checkbox">
        <Form.Check.Input onClick={handleOnClickRecycleShop} type="checkbox" isValid />
        <Form.Check.Label>Recycle Shop</Form.Check.Label>
      </Form.Check></Col>
      <Col></Col>
      <Col></Col>
      </Row>
</Form>
    <LeafMap center={currentLocation ? currentLocation : centerPosition} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {recycleShopEnable && markersForRecycleShops}
      {sustainableShopEnable && markersForSustainableShops}
    </LeafMap>
    </Container>
  )

}
    
 

export default App;