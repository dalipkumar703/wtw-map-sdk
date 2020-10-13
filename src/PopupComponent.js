import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {Popup} from 'react-leaflet';
import {Button, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {PRODUCT_URL} from './config';

const PopupComponent = (prop) => {
    // let buckets = useSelector((state) => state.addTodo)
    // let bucketList = [];
    // if (buckets){
    //    buckets.forEach((bucket)=>{
    //    bucketList.push(<ListGroup.Item key={bucket.id} variant='primary' tabIndex="0">{bucket.name}</ListGroup.Item>)
    //    })

    // }
    const {shopDetailParser} = prop;

    const handleBuyProduct = () =>{ 
        const id = uuidv4();
        localStorage.setItem(id, 'true');
        axios.get(`${PRODUCT_URL}store-search/${id}/${shopDetailParser.name}`);
    } 
    const handleCheckOnGoogle = () => {
      window.open(`https://google.com/search?q=${shopDetailParser.name}`, '_blank');
    }
return (
    <Popup>
           <span>{shopDetailParser && shopDetailParser.name}</span>
         <br/>
           <span>{shopDetailParser && shopDetailParser.display_name}</span><br/>
     
      <Row>
        
        {/* <Col><Button onClick={handleBuyProduct} variant="primary" abse>Buy product</Button>
     </Col> */}
     <Col> <Button onClick={handleCheckOnGoogle} variant="primary">Check on Google</Button>
     </Col>
      
      </Row>
        </Popup>
)
};
export default PopupComponent;