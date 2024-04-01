// App.js
import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import { settingsContext } from "./Context";
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
import ReadmePage from "./pages/ReadmePage";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const [setting, setSetting] = useState({
    navigationType: "NavBar1",
    productCardVariant: "ViewAll",
    productCardType: "WithButtons",
  });

  return (
    <settingsContext.Provider value={{ setting, setSetting }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/readme" element={<ReadmePage />} />
        </Routes>
      </BrowserRouter>
    </settingsContext.Provider>
  );
}

export default App;
