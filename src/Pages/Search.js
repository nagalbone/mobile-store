import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Products from "../Products";
import { Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
const Search = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.product);
  const [data, updatedata] = useState([]);

  useEffect(() => {
    const newArr = Products.filter((val) => {
      if (val.name.toLowerCase().includes(params.product.toLowerCase())) {
        return val;
      }
    });
    updatedata(newArr);
  }, [params.product]);

  console.log(data.length);

  return (
    <Row>
      <h1
        style={{
          textAlign: "center",
          margin: "20px",
          color: "rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1))",
        }}
      >
        {data.length !== 0 ? "Search Result" : ""}
      </h1>
      {data.length !== 0 ? (
        data.map((row, index) => {
          return (
            <Col
              sm={6}
              md={4}
              xs={12}
              lg={3}
              key={index}
              className="card"
              style={{ padding: "20px", height: "383px" }}
            >
              <img src={row.image} height="150px" alt="preview" />
              <br />
              <h2>{row.name}</h2>
              <div>Price: Rs. {row.price}</div>
              <div>Category: {row.category}</div>
              <div style={{ display: "flex" }}>
                Colors:{" "}
                {row.colors.map((col) => {
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
                className="btn btn-primary"
                value="Show More"
                onClick={() => navigate("../product-info/" + row.id)}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  alignItems: "center",
                }}
              />
            </Col>
          );
        })
      ) : (
        <Col>
          <h1 style={{ textAlign: "center" }}>
            {" "}
            <Alert key="danger" variant="danger">
              No Products Found...
            </Alert>
          </h1>
        </Col>
      )}
    </Row>
  );
};

export default Search;
