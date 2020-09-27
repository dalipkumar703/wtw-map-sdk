import React, {useState, useEffect} from 'react'
import {Map as LeafMap, Marker, Popup, TileLayer } from 'react-leaflet'
import {forEach} from 'lodash'
import recycleShopConstant from './recycleShopConstant'
import sustainableShopsConstant from './sustainableShopConstant'
import {Form, Row, Col, Container} from 'react-bootstrap'
import recycleShopsConstants from './recycleShopConstant'
import {getLocationDetailByGeoCodes} from './mapApiHelper';
import { map } from 'leaflet'

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
      
        const result = await getLocationDetailByGeoCodes(position[0], position[1]);
        if (!result.err && result.name && result.display_name) {
          console.log("fetched data", result)
          map.set(`${position[0]}_${position[1]}`, result);
        } else {
          console.log("error fetching details");
      }
     
    })
   
  },[])

  const handleOnClickSustainbleShop = (event) =>{
    setSustainableShopEnable(event.target.checked)
    (forEach(sustainableShopsConstant, (position) =>{
      const shopDetail = shopDetailsMap.get(`${position[0]}_${position[1]}`)
    markersForSustainableShops.push( <Marker position={position} >
     <Popup>
        <span>{shopDetail && shopDetail.name}</span>
      <br/>
        <span>{shopDetail && shopDetail.display_name}</span><br/>
     </Popup>
   </Marker>);
   
   }));
  } 
  const handleOnClickRecycleShop = (event) => {
   setRecycleShopEnable(event.target.checked)
  }
  (forEach(recycleShopConstant, (position) =>{
    markersForRecycleShops.push( <Marker position={position} >
     <Popup>
        <span>ADDRESS:</span>
      <br/>
        <span>BATTALION: </span><br/>
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
      {sustainableShopEnable && markersForSustainableShops}
      {recycleShopEnable && markersForRecycleShops}
    </LeafMap>
    </Container>
  )

}
    
 

export default App;