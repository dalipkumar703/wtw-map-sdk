import React, {useState, useEffect, useRef} from 'react'
import {Map as LeafMap, Marker, Popup, TileLayer } from 'react-leaflet'
import {useSelector, useDispatch} from 'react-redux';
import {forEach, findIndex, sortBy} from 'lodash'
import {Form, Row, Col, Container} from 'react-bootstrap'
import { InputSearch, Popover, List, Button,ListItem } from '@momentum-ui/react';
import uniqueId from 'lodash/uniqueId';

import {updateCurrentLocation} from './actions';
import recycleShopConstant from './recycleShopConstant';
import {sustainableShopsConstant, getIcon} from './sustainableShopConstant'
import recycleShopsConstants from './recycleShopConstant'
import {getLocationDetailByGeoCodes, getDistanceBetweenNodes} from './mapApiHelper';
import PopupComponent from './PopupComponent';
import SearchComponent from './SearchComponent';
import {filterShopsByType} from './sustainableShopConstant';
// import {selectCurrentLocation} from './selector';

 const centerPosition = [28.62709, 77.05001];

const App = () => {
  const dispatch = useDispatch();
  const [recycleShopEnable, setRecycleShopEnable] = useState(false);
  const [sustainableShopEnable, setSustainableShopEnable] = useState(false);
  const [searchListA, setSearchListA] = useState([]);
  const [searching, setSearching] = useState(false);
  const [displayShops, setDisplayShops] = useState(false);
  const currentLocation= useSelector((state) => state.mapReducer.currentLocation);
  const [markersForSustainableShops, setMarkersForSustainableShops] = useState(null);
  const [markersForDisplayShops, setMarkersForDisplayShops] = useState(null);
  const [searchComponentVisibile, setSearchComponentVisible] = useState(true);
  const [clearButton, setClearButton] = useState(false);
  const markerMapRef = useRef();
  let markersForRecycleShops = [];
  const shopDetailsMap = new Map();

//   const handleOnClick = (e) => {
//     if (e.target.id){
//         const geodata = filterShopsByType(e.target.id);
//         console.log("geodata:",geodata);
//         forEach(geodata, (geoCoordinate) => {
//           const result = JSON.parse(localStorage.getItem(`${geoCoordinate[0][0]}_${geoCoordinate[0][1]}`));
//         searchList.push(<ListItem>{`${result.name}\n${result.display_name}`}</ListItem>)
//         })
//     }
// };
const displayMarker = (pos, type, result) => (
<Marker position={pos} icon={getIcon(type)} ref={markerMapRef}>
         <PopupComponent shopDetailParser={JSON.parse(result)} />
        </Marker>
);

const getNearShopsList = (geodata, searchList, id) => {
 let promises = [];
  forEach(geodata,  (geoCoordinate) => {
   const result = JSON.parse(localStorage.getItem(`${geoCoordinate[0][0]}_${geoCoordinate[0][1]}`));
   if (result && currentLocation){
     promises.push(getDistanceBetweenNodes(`${currentLocation[1]},${currentLocation[0]}`,`${geoCoordinate[0][1]},${geoCoordinate[0][0]}`, result.display_name));
     
   // setSearchListA(searchList);
   // const activeElement = document.getElementById('pillSearchInput');
   // if (activeElement){
   //   activeElement.focus();
   // }
 }
 })
 Promise.all(promises).then((data)=>{
   console.log("promise resolve:",data);
  const newData = sortBy(data,[(eachObject)=>{return eachObject.distance}]);
  forEach((newData), (eachObject)=>{
    searchList.push(<ListItem key={uniqueId()} id={id} data-distance={eachObject.distance}>{`${eachObject.displayName}`}{eachObject.distance ? ` ${(eachObject.distance/1000).toFixed(2)} km`: ''}</ListItem>);
  }) 
  setSearching(false);
  setSearchListA(searchList);
  const activeElement = document.getElementById('pillSearchInput');
  if (activeElement){
    activeElement.focus();
  }
 })

}
const handleSearchKeyDown = (e) => {
  if (e.target.innerText || e.keyCode === 13){
    let storageLength = localStorage.length;
    while (storageLength > 0){
     const result = localStorage.getItem(localStorage.key(storageLength - 1));
     if (result && e.target.innerText.indexOf(JSON.parse(result)?.display_name) > -1){
      const displayContent = displayMarker(localStorage.key(storageLength -1 ).split("_"), e.target.id, result);
     
      setMarkersForDisplayShops(displayContent);
      setDisplayShops(true);
    }
    storageLength = storageLength - 1;
    }
  }
};

useEffect(()=> {
  if (displayShops) {
  markerMapRef.current.leafletElement.openPopup();
  }
}, [displayShops])
useEffect(()=>{
  if (searchListA.length > 0){
    setSearchComponentVisible(false);
    setClearButton(true);
  }
}, [searchListA])
const buttonComponent = (
  <Button
  children='Clear'
  ariaLabel='Clear'
  onClick={()=>{
    setSearchListA([]);
    setSearchComponentVisible(true);
    setClearButton(false);
  }}
/>
);
const searchListComponent = (
     <List onClick={(e) => {
  if (e.target.value && e.keyCode === 13){
    let storageLength = localStorage.length;
    while (storageLength > 0){
     const result = localStorage.getItem(localStorage.key(storageLength - 1));
     if (result && result.display_name.indexOf(e.target.value) > -1){
      const displayContent = displayMarker(localStorage.key(storageLength -1 ).split("_"), e.target.id, result);
     
      setMarkersForDisplayShops(displayContent);
      setDisplayShops(true);
      storageLength = storageLength - 1;
    }
    }
  }
}}>
      {searchListA}
    </List>
   
  );
  useEffect(()=>{
    if ('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // setCurrentLocation([position.coords.latitude, position.coords.longitude])
        dispatch(updateCurrentLocation([position.coords.latitude, position.coords.longitude]));
      });
    }
    forEach(sustainableShopsConstant, async (position) => {
        let keys = Object.keys(localStorage);
        if (findIndex(keys, (key)=> key === `${position[0][0]}_${position[0][1]}`) < 0){
          const result = await getLocationDetailByGeoCodes(position[0][0], position[0][1]);
        if (result && result.name && result.display_name && !result.err) {
          shopDetailsMap.set(`${position[0][0]}_${position[0][1]}`, result);
          localStorage.setItem(`${position[0][0]}_${position[0][1]}`, JSON.stringify(result));
        } else {
          console.log("error fetching details");
      }
        }
        
    })
   
  },[])

  const handleOnClickSustainbleShop = (event) =>{
    let temp = [];
    (forEach(sustainableShopsConstant, (position) =>{
      const shopDetail = localStorage.getItem(`${position[0][0]}_${position[0][1]}`);
      let shopDetailParser;
      if (shopDetail){
        shopDetailParser = JSON.parse(shopDetail);
        temp.push(<Marker position={position[0]} icon={position[1][0]? getIcon(position[1][0]): ''}>
         <PopupComponent shopDetailParser={shopDetailParser} />
        </Marker>);
      }
   
   }));
   setMarkersForSustainableShops(temp);
    setSustainableShopEnable(event.target.checked)
  
  }

  const handleOnClickRecycleShop = (event) => {
   setRecycleShopEnable(event.target.checked)
  }
//TODO: add recycle shops
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
       <div>Click/Tick to view recyle or sustainable shops around you.</div>
      </Row>
      <Row>
      {searching && "Searching ..."}     
      <Popover
          content={searchListComponent}
          // autoFocusOnFirstElt
          showArrow={false}
          popoverTrigger={'MouseEnter'}
          direction={'right-center'}
          style={{marginTop: '50px', zIndex: 1085}}
          // onKeyDown={handleKeyDown}
          // onChange={handleSearchKeyDown}
          closeOnClick={true}
          close={handleSearchKeyDown}
          // anchorNode={searchListComponent}
          allowClickAway={false}
          // startOpen={searchListA.length > 0? true : false}
        >
 <InputSearch
      clear
      htmlId='pillSearchInput'
      containerSize='medium-6'
      name='pillSearchInput'
      shape='pill'
      className={{padding: '5px'}}
    />
            </Popover>
            {clearButton && buttonComponent}
                <SearchComponent isVisible={searchComponentVisibile} onClick={async (e) => {
    if (e.target.id){
        const id = e.target.id;
        const geodata = filterShopsByType(e.target.id);
        const searchList = [];
        //get nearer shop array
        setSearching(true);
        await getNearShopsList(geodata, searchList, id);
       
    }
}}/>
     
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
      {displayShops && markersForDisplayShops}
    </LeafMap>
    </Container>
  )

}
    
 

export default App;