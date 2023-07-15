import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Card from "../components/Card";
import { useFilterContext } from "../context/filter_context";
import Alert from "react-bootstrap/Alert";
const Shop = () => {
  const {
    filterProductInput,
    filterByPrice,
    filterByCompany,
    all_products,
    filter_products,
  } = useFilterContext();
  const getUniqueProductCategory = (data, attr) => {
    let newuniqueList = data.map((val) => {
      return val[attr];
    });
    if (attr === "colors") {
      newuniqueList = newuniqueList.flat();
    }
    return (newuniqueList = ["All", ...new Set(newuniqueList)]);
  };
  // const category = getUniqueProductCategory(all_products, "category");
  const company = getUniqueProductCategory(all_products, "company");
  // const colors = getUniqueProductCategory(all_products, "colors");

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
        <Col>
          <div
            style={{
              height: "68px",
              margin: "10px",
              padding: "20px",
            }}
          >
            <input
              type="text"
              placeholder="search products"
              onChange={(e) => filterProductInput(e.target.value)}
            />
            &nbsp;Sort Price
            <select onChange={(e) => filterByPrice(e.target.value)}>
              <option value="lth">Low To High</option>
              <option value="htl">High To Low</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <div className="card" style={{ padding: "10px", height: "200px" }}>
            {/* <h5>Category</h5>
            {category.map((val, index) => {
              return (
                <h5 key={index}>
                  <input type="button" value={val} className="btn btn-light" />
                </h5>
              );
            })}

            <hr /> */}
            <h5>Company</h5>
            <select
              className="form-control"
              onChange={(e) => filterByCompany(e.target.value)}
            >
              {company.map((val, index) => {
                return (
                  <option key={val} value={val}>
                    {val}
                  </option>
                );
              })}
            </select>
            {/* <hr />
            <h5>Colors</h5>
            <div style={{ display: "flex" }}>
              {colors.map((col) => {
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
            </div> */}
          </div>
        </Col>
        <Col md={10}>
          <Row>
            {filter_products.length !== 0 ? (
              filter_products?.map((row, index) => {
                return <Card props={row} key={index} />;
              })
            ) : (
              <Alert key="danger" variant="danger">
                Product Not Found...!
              </Alert>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
