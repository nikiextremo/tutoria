import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function ShowCard() {
  return (
    <Carousel className="">
      <Row>
         <Col>hola</Col>
         <Col>hola</Col>
         <Col>hola</Col>  
        </Row>  
    </Carousel>

  );
}
