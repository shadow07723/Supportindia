import React from "react";
import HorizontalCards from "./HorizontalCards";
import Cards from "./Cards";
import Footer from "../Header/Footer";

function HomeComponent() {
  return (
    <div>
      <HorizontalCards />
      <Cards />
      <Cards />
      <Footer />
    </div>
  );
}

export default HomeComponent;
