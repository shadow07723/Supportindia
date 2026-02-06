import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./ScrollToTop.jsx";
import LanguageProvider from "./LanguageContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
 <HelmetProvider>
  <HashRouter>
    <LanguageProvider>
      <ScrollToTop />
      <App />
    </LanguageProvider>
    </HashRouter>
    </HelmetProvider>,
);
