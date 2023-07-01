import React from "react";
import { Row } from "react-bootstrap";
import Products from "../Products";
import Card from "../components/Card";
const Shop = () => {
  return (
    <Row>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          color: "rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))",
        }}
      >
        All Products
      </h1>
      {Products?.map((row, index) => {
        return <Card props={row} key={index} />;
      })}
    </Row>
  );
};

export default Shop;
