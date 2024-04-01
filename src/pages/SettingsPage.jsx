import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { settingsContext } from "../Context";
import "./SettingsPage.css";

const SettingsPage = () => {
  const navigate = useNavigate();
  const settings = useContext(settingsContext);
  const [navigationType, setNavigationType] = useState(
    settings.setting.navigationType
  );
  const [productCardVariant, setProductCardVariant] = useState(
    settings.setting.productCardVariant
  );
  const [productCardType, setProductCardType] = useState(
    settings.setting.productCardType
  );
  const [tooltipText, setTooltipText] = useState(""); // State to handle tooltip text

  const handleSubmit = (event) => {
    event.preventDefault();
    setTooltipText("Redirecting to catalog"); // Set tooltip text

    const newSettings = {
      navigationType: navigationType,
      productCardVariant: productCardVariant,
      productCardType: productCardType,
    };

    settings.setSetting(newSettings);

    setTimeout(() => {
      navigate("/catalog");
    }, 1000);
  };

  const handleMouseEnter = () => {
    setTooltipText("Click to Redirect to Catalog");
  };

  const handleMouseLeave = () => {
    setTooltipText("");
  };

  return (
    <>
      <h2 className="settings-title">SETTINGS PAGE</h2>
      <div className="settings-page-container">
        <form onSubmit={handleSubmit} className="settings-form">
          <div className="settings-input-container">
            <label className="settings-label">Navigation Type:</label>
            <select
              value={navigationType}
              onChange={(e) => setNavigationType(e.target.value)}
              className="settings-select"
            >
              <option value="NavBar1">Navbar 1</option>
              <option value="NavBar2">Navbar 2</option>
            </select>
          </div>
          <div className="settings-input-container">
            <label className="settings-label">Product Card Variant:</label>
            <select
              value={productCardVariant}
              onChange={(e) => setProductCardVariant(e.target.value)}
              className="settings-select"
            >
              <option value="Carousel">Carousel</option>
              <option value="ViewAll">View All</option>
            </select>
          </div>
          <div className="settings-input-container">
            <label className="settings-label">Product Card Type:</label>
            <select
              value={productCardType}
              onChange={(e) => setProductCardType(e.target.value)}
              className="settings-select"
            >
              <option value="WithButtons">With Buttons</option>
              <option value="WithoutButtons">Without Buttons</option>
            </select>
          </div>
          <button
            type="submit"
            className="settings-submit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            title={tooltipText}
          >
            Save Settings
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsPage;
