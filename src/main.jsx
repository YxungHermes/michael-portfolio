import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProjectDataProvider } from "./pages/ProjectDetailDataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectDataProvider>
        <App />
      </ProjectDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);