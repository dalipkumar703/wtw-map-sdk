import React, {useState, useEffect} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import {forEach} from 'lodash'
import recycleShopConstant from './recycleShopConstant'
import sustainableShopsConstant from './sustainableShopConstant'
import {Form, Row, Col, Container} from 'react-bootstrap'

 const centerPosition = [28.62709, 77.05001];

const App = () => {
  const [recycleShopEnable, setRecycleShopEnable] = useState(false);
  const [sustainableShopEnable, setSustainableShopEnable] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  let markersForRecycleShops = [];
  let markersForSustainableShops = [];
  useEffect(()=>{
    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setCurrentLocation([position.coords.latitude, position.coords.longitude])
      });
    }
  },[])

  const handleOnClickSustainbleShop = (event) =>{
    setSustainableShopEnable(event.target.checked)
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

   (forEach(sustainableShopsConstant, (position) =>{
   markersForSustainableShops.push( <Marker position={position} >
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
    <Map center={currentLocation ? currentLocation : centerPosition} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {sustainableShopEnable && markersForSustainableShops}
      {recycleShopEnable && markersForRecycleShops}
    </Map>
    </Container>
  )

}
    
 

export default App;