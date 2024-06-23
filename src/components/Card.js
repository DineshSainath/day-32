import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Import custom styles

function Card({ id, title, brand, desc, price, thumbnail }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    dispatch(
      updateCart({ product: { id, title, price }, quantity: newQuantity })
    );
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center p-3">
          <img
            src={thumbnail}
            className="thumbnail img-fluid rounded"
            alt={title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex justify-content-between align-items-start">
            <div className="desc-section">
              <h2 className="card-title">{title}</h2>
              <h4 className="card-subtitle mb-2 text-muted">{brand}</h4>
              <p className="card-text">{desc}</p>
            </div>
            <div className="section2 d-flex flex-column align-items-end">
              <p className="price mb-2">Price: ${price.toFixed(2)}</p>
              <div className="quantity d-flex align-items-center mb-2">
                <label htmlFor={`quantity-${id}`} className="mb-0 me-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id={`quantity-${id}`}
                  min="0"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="form-control quantity-input"
                />
              </div>
              <p className="subtotal mb-0">
                Subtotal: ${(price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
