import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {EventOverlay} from '@momentum-ui/react'
import {PropTypes} from 'prop-types';

const SearchComponent = ({onClick, isVisible}) => {
    const content = isVisible ?  <EventOverlay
    isOpen={true}
    style={{marginTop: '40px'}}
    allowClickAway={false}
    >
      <Container style={{height: '180px', overflowY: 'scroll'}}>
<Row>
    <Col xs={3} md={3}>
        <a  onClick={onClick}>        <Image src="https://svgur.com/i/Qei.svg" id="ORGANIC_COSMETICS" height="30px" width="30px" fluid />
</a>
    <br></br>
    <p>Cosmetics</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/QJz.svg" id="ORGANIC_VEGETABLE" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Vegetables</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/QHz.svg" id="SUSTAINABLE_PADS" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Pads</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/QKk.svg" id="ECO_FRIENDLY_PRODUCTS" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Eco Products</p>
  </Col>
    </Row>
    <Row>
   
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/R7a.svg" id="GREEN_GIFT" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Gift</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>     <Image src="https://svgur.com/i/R2S.svg" id="ORGANIC_MEAT" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Plant meat</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/RfN.svg" id="ORGANIC_ICECREAM" height="60px" width="60px" fluid /></a>
    <br></br>
    <p>Icecream</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/Reb.svg" id="ORGANIC_FASTFOOD" height="70px" width="60px" fluid /></a>
    <br></br>
    <p>Fast Food Cafe</p>
  </Col>
    </Row>
    <Row>
   
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/SBF.svg" id="SUSTAINABLE_SUPERMARKET" height="30px" width="30px" fluid /></a>
    <br></br>
    <p>Supermarket</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>     <Image src="https://svgur.com/i/SAv.svg" id="SUSTAINABLE_CLOTH_STORE" height="40px" width="40px" fluid /></a>
    <br></br>
    <p>Cloth</p>
  </Col>

  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>     <Image src="https://svgur.com/i/Sfz.svg" id="SUSTAINABLE_BABY_STORE" height="40px" width="40px" fluid /></a>
    <br></br>
    <p>Baby Care</p>
  </Col>
  {/* <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/RfN.svg" id="ORGANIC_ICECREAM" height="60px" width="60px" fluid /></a>
    <br></br>
    <p>Icecream</p>
  </Col>
  <Col xs={3} md={3}>
    {' '}
    <a  onClick={onClick}>   <Image src="https://svgur.com/i/Reb.svg" id="ORGANIC_FASTFOOD" height="70px" width="60px" fluid /></a>
    <br></br>
    <p>Fast Food</p>
  </Col> */}
    </Row>
    </Container>
    </EventOverlay>
    : null;
    return content;
};
SearchComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired
  };

export default SearchComponent;