import PropTypes from "prop-types";
import React from "react";
import "./CartModal.css";

function CartModal({ cartItems, handleCloseCart }) {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2 className="cart-modal-heading">Cart Items</h2>
        <ul className="cart-modal-list">
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handleCloseCart} className="cart-modal-close">
          Close
        </button>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleCloseCart: PropTypes.func.isRequired,
};

export default CartModal;
