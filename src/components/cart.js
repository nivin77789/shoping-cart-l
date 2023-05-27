import React, { useState } from "react";
import "./cart.css";
function Cart(props) {
  const [count, setCount] = useState(1);
  return (
    <div className="cart">
      <div className="sub-cart">
        <h1>Shopping Cart</h1>
        <div className="cart-list">
          {props.product.map((product) => (
            <div className="lister" key={product.id}>
              <img alt="lk" src={product.image}></img>
              <div className="text">
                <h3>{product.title}</h3>
              </div>
              <div className="count">
                <div
                  className="sub"
                  onClick={() => {
                    setCount(count - 1);
                  }}
                >
                  -
                </div>
                <div className="co">{count}</div>
                <div
                  className="add"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  +
                </div>
              </div>
              <div className="price">
                <h3>${product.price}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div className="leftc">
            <div className="dis">
              <h3>Discount code</h3>
              <img
                alt="disco"
                src="https://cdn-icons-png.flaticon.com/512/2611/2611152.png"
              ></img>
            </div>
            <input placeholder="'200OFF'&'100OFF' are Real Promo codes!"></input>
            <button>Apply Discount</button>
          </div>
          <div className="midc">
            <h2>Order Summary</h2>
            <div className="midc-tab">
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal:</td>
                      <td>$55.99</td>
                    </tr>
                    <tr>
                      <td>Taxes:</td>
                      <td>$2.80</td>
                    </tr>
                    <tr>
                      <td>Shipping:</td>
                      <td>$3.50</td>
                    </tr>
                  </tbody>
                </table>
                <hr />
                <table>
                  <tbody>
                    <tr>
                      <th>Total:</th>
                      <th>$355.99</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="rightc">
            <button>CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
