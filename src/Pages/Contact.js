import React from "react";
import {Form,Container,Row,Col} from 'react-bootstrap';
const Contact = () => {
  return (

    <Container>
      <Row>
        <Col></Col>
        <Col style={{marginTop:'20px'}}>
          <h2>Contact Form</h2>
          <hr/>
          <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type="number" placeholder="Mobile Number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <button className="btn btn-primary">Submit</button>
        </Form.Group>
      </Form>
        </Col><Col>
        
        </Col>
      </Row>
    </Container>
    
  )
};

export default Contact;
