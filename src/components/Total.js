import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import custom styles

function Total() {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="total-section card p-3 shadow-sm">
      <h2 className="mb-4">Cart Summary</h2>
      <ul className="list-group list-group-flush">
        {cart.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              {item.title} - Quantity: {item.quantity} - Subtotal: $
              {item.price * item.quantity}
            </div>
            <div className="remove">REMOVE</div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between mt-3">
        <span>SUBTOTAL:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>SHIPPING:</span>
        <span>FREE</span>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <h3>TOTAL:</h3>
        <h3>${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Total;
