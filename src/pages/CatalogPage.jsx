import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import CarouselView from "../components/CarouselView";
import CartModal from "../components/CartModal";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import ViewAll from "../components/ViewAll";
import { settingsContext } from "../Context";
import "./CatalogPage.css";

function CatalogPage() {
  const settings = useContext(settingsContext);
  const { navigationType, productCardVariant, productCardType } =
    settings.setting;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [settingsValue, setSettingsValue] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setSettingsValue(settings.setting);
  }, [settings]);

  const handleAddToCart = (title) => {
    setCartItems((prevCartItems) => [...prevCartItems, title]);
  };

  const handleRemoveFromCart = (title) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== title)
    );
  };

  const handleShowCart = () => {
    setShowCartModal(true);
  };

  const handleCloseCart = () => {
    setShowCartModal(false);
  };

  const renderProductList = () => {
    if (settingsValue?.productCardVariant === "Carousel") {
      return (
        <CarouselView
          products={products}
          productCardType={productCardType}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      );
    } else if (productCardVariant === "ViewAll") {
      return (
        <ViewAll
          products={products}
          productCardType={productCardType}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      );
    }
  };

  return (
    <div className="catalog-page-container">
      <div className="catalog-header">
        <h1 className="catalog-title">CATALOG PAGE</h1>
        <Link to="/settings" className="settings-link">
          <FaCog className="settings-icon" />
          Settings
        </Link>
      </div>

      {settingsValue?.navigationType === "NavBar1" ? (
        <div className="catalog-page display-row">
          <div className="navbar">
            <Navbar1 cartItems={cartItems} handleShowCart={handleShowCart} />
          </div>
          <div className="product-list">{renderProductList()}</div>
        </div>
      ) : (
        <div className="catalog-page display-column">
          <div className="navbar">
            <Navbar2 cartItems={cartItems} handleShowCart={handleShowCart} />
          </div>
          <div className="product-list">{renderProductList()}</div>
        </div>
      )}

      {showCartModal && (
        <CartModal cartItems={cartItems} handleCloseCart={handleCloseCart} />
      )}
    </div>
  );
}

export default CatalogPage;
