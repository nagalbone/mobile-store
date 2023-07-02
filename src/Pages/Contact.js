import React,{useState} from "react";
import {Form,Container,Row,Col} from 'react-bootstrap';
const Contact = () => {
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({name: '',email: '',mobile:'',message:''});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { isValid, errors } = validateForm();

    if (isValid) {
      // submit form
      console.log(formData)
    } else {
      setFormErrors(errors);
    }
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {};
  
    // Validate name
    if (formData.name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    }else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    // Validate mobile
    if (formData.mobile.trim() === '') {
      errors.mobile = 'Mobile is required';
      isValid = false;
    }else if (formData.mobile.length > 12 || formData.mobile.length < 9) {
      errors.mobile = 'Number Should less than 12 and greater than 10';
      isValid = false;
    }

    // Validate message
    if (formData.message.trim() === '') {
      errors.message = 'Message is required';
      isValid = false;
    }
  
    return { isValid, errors };
  };

  const errorColor = {
    color:'red'
  }

  const isNumber = (e) =>{
    if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) { 
      e.preventDefault();
    }
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col style={{marginTop:'20px'}}>
          <h2 style={{textAlign:'center'}}>Contact Form</h2>
          <hr/>
          <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} onKeyDown={isNumber} placeholder="Enter Full Name" />
          {formErrors.name && <p style={errorColor}>{formErrors.name}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
          {formErrors.email && <p style={errorColor}>{formErrors.email}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Mobile No:</Form.Label>
          <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" />
          {formErrors.mobile && <p style={errorColor}>{formErrors.mobile}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange}/>
          {formErrors.message && <p style={errorColor}>{formErrors.message}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </Form.Group>
      </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
};
export default Contact;
