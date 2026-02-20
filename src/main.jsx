import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ScrollToTop from "./ScrollToTop.jsx";
import LanguageProvider from "./LanguageContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </HelmetProvider>,
);
