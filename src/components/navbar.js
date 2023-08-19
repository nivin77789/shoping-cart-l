import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Justcart</h1>
      </div>
      <div className="menu">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/shop">
          <p>Shop</p>
        </Link>
        <Link to="/cart">
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
