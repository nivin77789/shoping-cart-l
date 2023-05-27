import React, { useState } from "react";
import "./card.css";

function Card(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  function handleItemClick(item) {
    setSelectedItems([...selectedItems, item]); // Add the selected item to the array
    selectedItems.map((it) => console.log(it));
  }

  return (
    <div className="card">
      <div className="image">
        <img alt="sh" src={props.product.image}></img>
      </div>

      <h1>{props.product.title}</h1>

      <p className="rating">{props.product.rating.rate} / 5.0 Stars</p>
      <div className="lower">
        <p className="rate">${props.product.price}</p>
        <button
          key={props.product.id}
          onClick={() => handleItemClick(props.product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
