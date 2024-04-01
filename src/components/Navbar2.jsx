import PropTypes from "prop-types";
import React from "react";
import { FaGlobe, FaHandPaper, FaHome, FaShoppingBag } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";
import "./Navbar2.css";

function Navbar2({ cartItems, handleShowCart }) {
  return (
    <nav className="navbar2">
      <div className="navbar2-header">
        <h1 className="logo">Ecommerce</h1>
      </div>
      <div className="navbar2-buttons">
        <div className="navbar2-button">
          <Link to="/">
            <button>
              <FaHome /> Home
            </button>
          </Link>{" "}
        </div>
        <div className="navbar2-button">
          <Link to="/readme">
            <button>
              <FaHandPaper /> Readme
            </button>
          </Link>
        </div>
        <div className="navbar2-button">
          <button onClick={handleShowCart}>
            <FaShoppingBag />
            <span className="button-text">Cart</span>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
        </div>
        <div className="navbar2-button">
          <Link to="https://arpit-singh.netlify.app/">
            <button>
              <FaGlobe /> Portfolio
            </button>
          </Link>{" "}
        </div>
      </div>
    </nav>
  );
}

Navbar2.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handleShowCart: PropTypes.func.isRequired,
};

export default Navbar2;
