import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
const UserConfig = () => {
  return (
    <>
    <Container className="">
    <Form>
      <Form.Group className="mb-3 mx-5 mt-5" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3  mx-5 mt-4" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3  mx-5 mt-4" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Form.Group className="mb-3  mx-5 mt-4" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Apellido" />
      </Form.Group>
      <InputGroup className="mb-3 mt-4">
      <InputGroup.Text className="mx-5" id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          className="mx-5"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Form.Group className="mb-3  mx-5 mt-4" controlId="exampleForm.ControlTextarea1">
      <Form.Control type="text" placeholder="Normal text" />
      </Form.Group>
      
    </Form>
    </Container>
    </>
    ); 
  };
  
  export default UserConfig;