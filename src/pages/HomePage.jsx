import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="title">
        <span className="e">E-</span>
        <span className="commerce"> Commerce</span>
        <FaShoppingCart className="cart-icon" />
      </h1>
      <div className="buttons-container">
        <Link to="/catalog" className="button">
          Go to Catalog
        </Link>
        <Link to="/settings" className="button">
          Go to Settings
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
