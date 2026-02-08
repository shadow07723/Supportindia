import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const Cards = () => {
  const { lang } = useContext(LanguageContext);

  const cardData = {
    en: [
      { id: 1, image: "Homeposter1.png", path: "/upi", service: "UPI Service" },
      { id: 2, image: "Homeposter1.png", path: "/pan", service: "PAN Card" },
      { id: 3, image: "Homeposter1.png", path: "/aadhaar", service: "Aadhaar" },
      { id: 4, image: "Homeposter1.png", path: "/account", service: "Account" },
      { id: 5, image: "Homeposter1.png", path: "/aayush", service: "Aayush" },
      { id: 6, image: "Homeposter1.png", path: "/privacy", service: "Privacy" },
      { id: 7, image: "Homeposter1.png", path: "/upi", service: "UPI Service" },
      { id: 8, image: "Homeposter1.png", path: "/pan", service: "PAN Card" },
      { id: 9, image: "Homeposter1.png", path: "/aadhaar", service: "Aadhaar" },
      {
        id: 10,
        image: "Homeposter1.png",
        path: "/account",
        service: "Account",
      },
      { id: 11, image: "Homeposter1.png", path: "/aayush", service: "Aayush" },
      {
        id: 12,
        image: "Homeposter1.png",
        path: "/privacy",
        service: "Privacy",
      },
      {
        id: 13,
        image: "Homeposter1.png",
        path: "/aadhaar",
        service: "Aadhaar",
      },
      {
        id: 14,
        image: "Homeposter1.png",
        path: "/account",
        service: "Account",
      },
      { id: 15, image: "Homeposter1.png", path: "/aayush", service: "Aayush" },
      {
        id: 16,
        image: "Homeposter1.png",
        path: "/privacy",
        service: "Privacy",
      },
    ],
    hi: [
      { id: 1, image: "Homeposter1.png", path: "/upi", service: "UPI सेवा" },
      { id: 2, image: "Homeposter1.png", path: "/pan", service: "पैन कार्ड" },
      { id: 3, image: "Homeposter1.png", path: "/aadhaar", service: "आधार" },
      { id: 4, image: "Homeposter1.png", path: "/account", service: "खाता" },
      { id: 5, image: "Homeposter1.png", path: "/aayush", service: "आयुष" },
      {
        id: 6,
        image: "Homeposter1.png",
        path: "/privacy",
        service: "प्राइवेसी",
      },
      { id: 7, image: "Homeposter1.png", path: "/upi", service: "UPI सेवा" },
      { id: 8, image: "Homeposter1.png", path: "/pan", service: "पैन कार्ड" },
      { id: 9, image: "Homeposter1.png", path: "/aadhaar", service: "आधार" },
      { id: 10, image: "Homeposter1.png", path: "/account", service: "खाता" },
      { id: 11, image: "Homeposter1.png", path: "/aayush", service: "आयुष" },
      {
        id: 12,
        image: "Homeposter1.png",
        path: "/privacy",
        service: "प्राइवेसी",
      },
      { id: 13, image: "Homeposter1.png", path: "/aadhaar", service: "आधार" },
      { id: 14, image: "Homeposter1.png", path: "/account", service: "खाता" },
      { id: 15, image: "Homeposter1.png", path: "/aayush", service: "आयुष" },
      {
        id: 16,
        image: "Homeposter1.png",
        path: "/privacy",
        service: "प्राइवेसी",
      },
    ],
  };

  return (
    <div className="grid grid-cols-4 md:grid-cols-6 gap-6 p-6">
      {cardData[lang].map((card) => (
        <Link
          key={card.id}
          to={card.path}
          state={{ service: card.service }}
          className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105 bg-white"
        >
          <img
            src={card.image}
            alt={card.service}
            className="w-full h-20 object-fill group-hover:brightness-110"
          />

          <div className="text-center py-3 h-10 font-semibold text-gray-800">
            {card.service}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
