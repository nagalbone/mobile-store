import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import PriceHelper from "../helper/PriceHelper";
const Card = ({ props, index }) => {
  const navigate = useNavigate();
  return (
    <>
      <Col
        sm={6}
        md={4}
        xs={12}
        lg={3}
        key={index}
        className="card"
        style={{ padding: "20px", height: "383px",border: 'none' }}
      >
        <img src={props.image} height="150px" alt="preview" />
        <br />
        <h3>
          <Link
            to={"../product-info/" + props.id}
            style={{ textDecoration: "none",color:'black' }}
          >
            {props.name}
          </Link>
        </h3>
        <div>Price: <PriceHelper price={props.price} /></div>
        <div>Category: {props.category}</div>
        <div style={{ display: "flex" }}>
          Colors:{" "}
          {props.colors.map((col) => {
            return (
              <div
                style={{
                  backgroundColor: col,
                  width: "16px",
                  height: "17px",
                  borderRadius: "50%",
                  marginTop: "5px",
                  marginLeft: "10px",
                }}
              ></div>
            );
          })}
        </div>
        <input
          type="button"
          className="btn btn-secondary"
          value="Show More"
          onClick={() => navigate("../product-info/" + props.id)}
          style={{
            position: "absolute",
            bottom: "10px",
            alignItems: "center",
          }}
        />
      </Col>
    </>
  );
};

export default Card;
