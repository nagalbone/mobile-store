import React from "react";
import {Container,Col,Row,Table} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart_context";
import Alert from "react-bootstrap/Alert";
import { useNavigate,Link } from "react-router-dom";
import PriceHelper from "../helper/PriceHelper";
const Cart = () => {
  const {cart,clearCart,removeItem,total_amount,shipping_fee,setIncrement,setDecrement} = useCartContext();
  const navigate = useNavigate();
  return (
      <>
      <Container>
    {
      cart.length !== 0 ? (
        <>
        <Row>
      <Table style={{marginTop:'20px'}}>
      <thead>
        <tr>
          <th>Product Id</th>
          <th>Product</th>
          <th>Price</th>
          <th>Quentity</th>
          <th>Sub Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map((val)=>{
            return(
              <tr>
            <td>{val.id}</td>
            <td><img src={val.image} width="50px" height="50px" alt="preview"/><Link style={{textDecoration: "none",color:'black'}} to={'../product-info/'+val.id}>{" " +val.name}</Link></td>
            <td><PriceHelper price={val.price} /></td>
            <td><button className="btn btn-light" onClick={()=>setDecrement(val.id)}> -</button><input type="text" value={val.amount} style={{width:'32px',textAlign:'center',height: '32px'}} disabled/>
            <button className="btn btn-light" onClick={()=>setIncrement(val.id)}>+</button></td>
            <td><PriceHelper price={val.sub_total}/></td>
            <td><FontAwesomeIcon icon={faTrash} onClick={()=>removeItem(val.id)}/></td>
          </tr>
            )
          })
        }
      </tbody>
      </Table>
      </Row>
      <Row>
        <Col md={9}>
        <div>
        <button className="btn btn-danger" onClick={clearCart}>Clear Cart</button>
        </div>
        </Col>
        <Col md={3}>
        <Table>
          <tbody>
            <tr>
              <td>Grand Sub Totol: </td>
              <td><PriceHelper price={total_amount} /></td>
              </tr>

              <tr>
              <td>Delivery Cost/Tax: </td>
              <td><PriceHelper price={shipping_fee} /></td>
              </tr>

              <tr colspan="2">
              <td><b>Grand Total: </b></td>
              <td><PriceHelper price={parseInt(total_amount) + parseInt(shipping_fee)} /></td>
              </tr>
          </tbody>
        </Table>
        </Col>
      </Row>
        </>
        
      ) : (<Row>
        <Col>
        <div style={{textAlign:'center',marginTop:'20px'}}>
        <Alert key="danger" variant="danger">
              Cart Is Empty...
            </Alert>
            <button onClick={()=>navigate('/shop')} className="btn btn-secondary">Continue Shopping</button>
        </div>
        </Col>
      </Row>)
    }
      

      </Container>
      </>    
  )
};

export default Cart;
