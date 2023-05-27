import React from "react";
import Card from "./card";
import "./shop.css";

function Shop(props) {
  return (
    <div className="shope">
      {props.product.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
