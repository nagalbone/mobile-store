import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProductInfo from "../Pages/ProductInfo";
import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search/:product" element={<Search />} />
        <Route path="/product-info/:id" element={<ProductInfo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default Router;
