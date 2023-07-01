import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart_context";
function NavScrollExample() {

  const {total_item} = useCartContext();
  const disable = {
    textDecoration: "none",
  };

  const navigate = useNavigate();
  const ref = useRef();
  const [search, updateSearch] = useState("");

  const searchFun = (e) => {
    if (search === "") {
      ref.current.focus();
      ref.current.style.borderColor = "red";
    } else {
      ref.current.style.borderColor = "";
      navigate("search/" + search);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/" style={disable}>
            <button className="btn btn-primary">Mobile Shop</button>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link to="/" style={disable}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/shop" style={disable}>
                My Shop
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" style={disable}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact" style={disable}>
                Contact
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/cart" title="My Cart" style={disable}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div
                style={{
                  backgroundColor: '#4479c8',
                  width: "12px",
                  height: "17px",
                  borderRadius: "50%",
                  marginTop: "-34px",
                  marginLeft: "4px",
                  textAlign:'center',
                  color:'antiquewhite',
                }}
              >{total_item}</div>
              </Link>
            </Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
              value={search}
              ref={ref}
              onChange={(e) => updateSearch(e.target.value)}
            />
            <Button variant="outline-success" onClick={searchFun}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
