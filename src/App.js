import "./App.css";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Shop from "./components/shop";
import { Routes, Route } from "react-router-dom";

function App() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Section />} />
          <Route
            path="/shop"
            element={<Shop key={product.id} product={product} />}
          />
          <Route
            path="/cart"
            element={<Cart key={product.id} product={product} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
