import React, { useContext, useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const Cards = () => {
  const { lang } = useContext(LanguageContext);
  const [showMore, setShowMore] = useState(false);
  const [initialCards, setInitialCards] = useState(6); // default desktop

  // ✅ Responsive initial cards
  useEffect(() => {
    const updateInitialCards = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setInitialCards(6);
      } else {
        // mobile / md
        setInitialCards(8);
      }
    };
    updateInitialCards();
    window.addEventListener("resize", updateInitialCards);
    return () => window.removeEventListener("resize", updateInitialCards);
  }, []);

  const cardData = {
    en: [
      // {
      //   id: "upi",
      //   image: "Homeposter1.png",
      //   path: "/upi",
      //   service: "UPI Service",
      // },
      // {
      //   id: "pan",
      //   image: "Homeposter1.png",
      //   path: "/pan",
      //   service: "PAN Card",
      // },
      {
        id: "aadhaar",
        image: "Homeposter1.png",
        path: "/aadhar",
        service: "Aadhaar",
      },
      // {
      //   id: "account",
      //   image: "Homeposter1.png",
      //   path: "/account",
      //   service: "Account",
      // },
      // {
      //   id: "aayush",
      //   image: "Homeposter1.png",
      //   path: "/aayush",
      //   service: "Aayush",
      // },
      // {
      //   id: "privacy",
      //   image: "Homeposter1.png",
      //   path: "/privacy",
      //   service: "Privacy",
      // },
      // {
      //   id: "service7",
      //   image: "Homeposter1.png",
      //   path: "/service7",
      //   service: "Service 7",
      // },
      // {
      //   id: "service8",
      //   image: "Homeposter1.png",
      //   path: "/service8",
      //   service: "Service 8",
      // },
      // {
      //   id: "service9",
      //   image: "Homeposter1.png",
      //   path: "/service9",
      //   service: "Service 9",
      // },
      // {
      //   id: "service10",
      //   image: "Homeposter1.png",
      //   path: "/service10",
      //   service: "Service 10",
      // },
      // {
      //   id: "service11",
      //   image: "Homeposter1.png",
      //   path: "/service11",
      //   service: "Service 11",
      // },
      // {
      //   id: "service12",
      //   image: "Homeposter1.png",
      //   path: "/service12",
      //   service: "Service 12",
      // },
      // {
      //   id: "service13",
      //   image: "Homeposter1.png",
      //   path: "/service13",
      //   service: "Service 13",
      // },
      // {
      //   id: "service14",
      //   image: "Homeposter1.png",
      //   path: "/service14",
      //   service: "Service 14",
      // },
      // {
      //   id: "service15",
      //   image: "Homeposter1.png",
      //   path: "/service15",
      //   service: "Service 15",
      // },
      // {
      //   id: "service16",
      //   image: "Homeposter1.png",
      //   path: "/service16",
      //   service: "Service 16",
      // },
      // {
      //   id: "service17",
      //   image: "Homeposter1.png",
      //   path: "/service17",
      //   service: "Service 17",
      // },
      // {
      //   id: "service18",
      //   image: "Homeposter1.png",
      //   path: "/service18",
      //   service: "Service 18",
      // },
    ],
    hi: [
      // {
      //   id: "upi",
      //   image: "Homeposter1.png",
      //   path: "/upi",
      //   service: "UPI सेवा",
      // },
      // {
      //   id: "pan",
      //   image: "Homeposter1.png",
      //   path: "/pan",
      //   service: "पैन कार्ड",
      // },
      {
        id: "aadhaar",
        image: "Homeposter1.png",
        path: "/aadhar",
        service: "आधार",
      },
      // {
      //   id: "account",
      //   image: "Homeposter1.png",
      //   path: "/account",
      //   service: "खाता",
      // },
      // {
      //   id: "aayush",
      //   image: "Homeposter1.png",
      //   path: "/aayush",
      //   service: "आयुष",
      // },
      // {
      //   id: "privacy",
      //   image: "Homeposter1.png",
      //   path: "/privacy",
      //   service: "प्राइवेसी",
      // },
      // {
      //   id: "service7",
      //   image: "Homeposter1.png",
      //   path: "/service7",
      //   service: "सर्विस 7",
      // },
      // {
      //   id: "service8",
      //   image: "Homeposter1.png",
      //   path: "/service8",
      //   service: "सर्विस 8",
      // },
      // {
      //   id: "service9",
      //   image: "Homeposter1.png",
      //   path: "/service9",
      //   service: "सर्विस 9",
      // },
      // {
      //   id: "service10",
      //   image: "Homeposter1.png",
      //   path: "/service10",
      //   service: "सर्विस 10",
      // },
      // {
      //   id: "service11",
      //   image: "Homeposter1.png",
      //   path: "/service11",
      //   service: "सर्विस 11",
      // },
      // {
      //   id: "service12",
      //   image: "Homeposter1.png",
      //   path: "/service12",
      //   service: "सर्विस 12",
      // },
      // {
      //   id: "service13",
      //   image: "Homeposter1.png",
      //   path: "/service13",
      //   service: "सर्विस 13",
      // },
      // {
      //   id: "service14",
      //   image: "Homeposter1.png",
      //   path: "/service14",
      //   service: "सर्विस 14",
      // },
      // {
      //   id: "service15",
      //   image: "Homeposter1.png",
      //   path: "/service15",
      //   service: "सर्विस 15",
      // },
      // {
      //   id: "service16",
      //   image: "Homeposter1.png",
      //   path: "/service16",
      //   service: "सर्विस 16",
      // },
      // {
      //   id: "service17",
      //   image: "Homeposter1.png",
      //   path: "/service17",
      //   service: "सर्विस 17",
      // },
      // {
      //   id: "service18",
      //   image: "Homeposter1.png",
      //   path: "/service18",
      //   service: "सर्विस 18",
      // },
    ],
  };

  // ✅ Initial cards based on screen + showMore toggle
  const visibleCards = showMore
    ? cardData[lang].slice(0, 18)
    : cardData[lang].slice(0, initialCards);

  return (
    <div>
      <div className="flex items-center  px-6">
        <h1 className="text-lg font-bold">Services</h1>
        <span>
          <IoMdArrowDropdown />
        </span>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-6 gap-6 p-6">
        {visibleCards.map((card) => (
          <Link
            key={card.id}
            to={card.path}
            state={{ service: card.id }}
            className="group block rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-105 bg-white"
          >
            <img
              src={card.image}
              alt={card.service}
              className="w-full h-20 md:h-30 object-fill group-hover:brightness-110"
            />
            <div className="text-center py-3 h-10 font-semibold text-gray-800">
              {card.service}
            </div>
          </Link>
        ))}
      </div>
      <div className=" justify-end flex">
        {/* <button
          className="text-blue-600 font-semibold hover:scale-120 mr-4 "
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Less>>" : "More>>"}
        </button> */}
      </div>
    </div>
  );
};

export default Cards;
