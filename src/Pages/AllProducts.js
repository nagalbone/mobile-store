import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products";
import Card from "../components/Card";
const AllProducts = () => {
  const [data, updateData] = useState([]);
  useEffect(() => {
    const newArr = Products.filter((val) => {
      if (val.featured === true) {
        return val;
      }
    });
    updateData(newArr);
  }, []);
  return (
    <Row>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          color: "rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))",
        }}
      >
        Featured Products
      </h1>
      {data?.map((row, index) => {
        return <Card props={row} key={index} />;
      })}
    </Row>
  );
};

export default AllProducts;
