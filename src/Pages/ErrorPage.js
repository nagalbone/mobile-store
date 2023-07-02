import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
        <div style={{marginTop:'50px',textAlign:'center'}}>
          <h3>404 Page Not Found...!</h3><br/>
          <button className='btn btn-primary' onClick={()=>navigate('/')}>Go To Home</button>
        </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default ErrorPage;