import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // Make sure App.jsx exists in src/
import HomePage from "./pages/HomePage"; // Corrected path
// import InfoPage from "./pages/InfoPage"; // Make sure InfoPage.jsx exists in src/pages/
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          {/* <Route path="info" element={<InfoPage />} /> */}
          {/* Add other routes here if needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);