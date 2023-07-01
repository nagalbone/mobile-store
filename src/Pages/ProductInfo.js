import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Products from "../Products";
import { Row, Col } from "react-bootstrap";
const ProductInfo = () => {
  const params = useParams();
  const [data, updatedata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Products.filter((val) => {
      if (val.id === params.id) {
        updatedata(val);
      }
    });
  }, [params.id]);
  return (
    <>
      <button
        className="btn btn-light"
        style={{ margin: "10px" }}
        onClick={() => navigate("/")}
      >
        {"<<"}
      </button>
      <Row>
        <h2 style={{ textAlign: "center" }}>Product Info</h2>
      </Row>
      <br />
      <br />
      <Row>
        <Col>
          <img src={data.image} width="500px" height="500px" alt="preview" />
        </Col>
        <Col>
          <div>
            <h3>product Name: {data.name}</h3>
            <h3>Price: {data.price}</h3>
            <div>Description: {data.description}</div>
            <br />
            <div>
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductInfo;
