import PropTypes from "prop-types";
import React from "react";
import { FaBook, FaGlobe, FaHome, FaShoppingBag } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import "./Navbar1.css";

function Navbar1({ cartItems, handleShowCart }) {
  return (
    <nav className="navbar1">
      <h1 className="logo">Ecommerce</h1>
      <div className="navbar1-buttons">
        <Link to="/">
          <button className="nav-button">
            <FaHome /> Home
          </button>
        </Link>
        <Link to="/readme">
          <button className="nav-button">
            <FaBook /> Readme
          </button>
        </Link>
        <button className="nav-button" onClick={handleShowCart}>
          <FaShoppingBag />
          <span className="button-text">Cart</span>
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </button>
        <a
          href="https://arpit-singh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="nav-button">
            <FaGlobe /> Portfolio
          </button>
        </a>
      </div>
    </nav>
  );
}

Navbar1.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
};

export default Navbar1;
