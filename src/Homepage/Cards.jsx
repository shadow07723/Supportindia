import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const cardData = [
    { id: 1, image: "Homeposter1.png", path: "/upi", service: "upi" },
    { id: 2, image: "Homeposter1.png", path: "/pan", service: "pan" },
    { id: 3, image: "Homeposter1.png", path: "/aadhaar", service: "aadhaar" },
    { id: 4, image: "Homeposter1.png", path: "/account", service: "account" },
    { id: 5, image: "Homeposter1.png", path: "/aayush", service: "aayush" },
    { id: 6, image: "Homeposter1.png", path: "/privacy", service: "privacy" },
    { id: 7, image: "Homeposter1.png", path: "/upi", service: "upi" },
    { id: 8, image: "Homeposter1.png", path: "/pan", service: "pan" },
    { id: 9, image: "Homeposter1.png", path: "/aadhaar", service: "aadhaar" },
    { id: 10, image: "Homeposter1.png", path: "/account", service: "account" },
    { id: 11, image: "Homeposter1.png", path: "/aayush", service: "aayush" },
    { id: 12, image: "Homeposter1.png", path: "/privacy", service: "privacy" },
    { id: 13, image: "Homeposter1.png", path: "/aadhaar", service: "aadhaar" },
    { id: 14, image: "Homeposter1.png", path: "/account", service: "account" },
    { id: 15, image: "Homeposter1.png", path: "/aayush", service: "aayush" },
    { id: 16, image: "Homeposter1.png", path: "/privacy", service: "privacy" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-6  ">
      {cardData.map((card) => (
        <Link
          key={card.id}
          to={card.path}
          state={{ service: card.service }}
          className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105"
        >
          <img
            src={card.image}
            alt={card.service}
            className="w-full h-56 object-fill group-hover:brightness-110"
          />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
