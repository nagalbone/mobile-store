import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Products from "../Products";
import { Row, Col } from "react-bootstrap";
import { useCartContext } from "../context/cart_context";
import PriceHelper from "../helper/PriceHelper";
const ProductInfo = () => {
  const {addToCart} = useCartContext();
  const params = useParams();
  const [data, updatedata] = useState([]);
  const [amount,setAmount] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    Products.filter((val) => {
      if (val.id === params.id) {
        updatedata(val);
      }
    });
  }, [params.id]);
  const {id,name,price,image} = data;
  const stocks = 5;
  return (
    <>
      <button
        className="btn btn-secondary"
        style={{ margin: "10px" }}
        onClick={() => navigate("/")}
        title="Go Back"
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
            <h3>Product Name: {data.name}</h3>
            <h3>Price: <PriceHelper price={data.price} /></h3>
            <div>{data.description}</div>
            <br />
            <div>
              <button className="btn btn-light" onClick={()=>setAmount(amount == 1 ? 1 : amount - 1)}>-</button>
              <input type="text" value={amount} disabled style={{width:'34px',textAlign:'center',height: '32px'}}/>
              <button className="btn btn-light" onClick={()=>setAmount(amount == stocks ? stocks : amount + 1)}>+</button>
              &nbsp;
              <button className="btn btn-secondary" onClick={()=>addToCart(id,name,price,amount,image)}>Add To Cart</button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductInfo;
