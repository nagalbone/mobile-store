import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import Products from "../Products";
import Card from "../components/Card";
const Shop = () => {
  return (

    <Container>
      <Row>
        <Col>
        <h1
        style={{
          textAlign: "center",
          margin: "20px",
        }}
      >
        All Products
      </h1>
      </Col>
      </Row>
      <Row>
        <Col md={2}>
          <div className="card" style={{padding:'10px'}}>
          <h4>Filter Products</h4>
          <hr/>
          <h4><u>Brands:</u></h4>
          <h5><input type="checkbox" /> All</h5>
          <h5><input type="checkbox" /> Samsung</h5>
          <h5><input type="checkbox" /> Nokia</h5>
          <h5><input type="checkbox" /> Iphone</h5>
          <h5><input type="checkbox" /> Oppo</h5>
          <h5><input type="checkbox" /> One plus</h5>
          <h5><input type="checkbox" /> Reallme</h5>
          <hr />
          <h4><u>Category:</u></h4>
          <h5><input type="checkbox" /> All</h5>
          <h5><input type="checkbox" /> Electronics</h5>
          <h5><input type="checkbox" /> Mobile</h5>
          <hr />
          <h4><u>Sord By Price:</u></h4>
          <h5><input type="radio" name="price"/> Low To Hight</h5>
          <h5><input type="radio" name="price"/> High To Low</h5>
          </div>
        </Col>
        <Col md={10}>
          <Row>
          {Products?.map((row, index) => {
            return <Card props={row} key={index} />;
          })}
          </Row>
          
        </Col>
      </Row>
    </Container>

  );
};

export default Shop;
