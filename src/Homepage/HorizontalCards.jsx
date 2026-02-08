import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

const HorizontalScrollCards = () => {
  const { lang } = useContext(LanguageContext);

  const cards = {
    en: [
      {
        id: 1,
        title: "Service One",
        image: "1000046237-removebg-preview.png",
        link: "/service-one",
      },
      {
        id: 2,
        title: "Service Two",
        image: "Homeposter1.png",
        link: "/service-two",
      },
      {
        id: 3,
        title: "ServiceThree",
        image: "1000046237-removebg-preview.png",
        link: "/service-three",
      },
      {
        id: 4,
        title: "Service Four",
        image: "Homeposter1.png",
        link: "/service-four",
      },
      {
        id: 5,
        title: "Service One",
        image: "/images/img1.jpg",
        link: "/service-one",
      },
      {
        id: 6,
        title: "Service Two",
        image: "/images/img2.jpg",
        link: "/service-two",
      },
      {
        id: 7,
        title: "ServiceThree",
        image: "/images/img3.jpg",
        link: "/service-three",
      },
      {
        id: 8,
        title: "Service Four",
        image: "/images/img4.jpg",
        link: "/service-four",
      },
      {
        id: 9,
        title: "Service One",
        image: "/images/img1.jpg",
        link: "/service-one",
      },
      {
        id: 10,
        title: "Service Two",
        image: "/images/img2.jpg",
        link: "/service-two",
      },
      {
        id: 11,
        title: "ServiceThree",
        image: "/images/img3.jpg",
        link: "/service-three",
      },
      {
        id: 12,
        title: "Service Four",
        image: "/images/img4.jpg",
        link: "/service-four",
      },
    ],
    hi: [
      {
        id: 1,
        title: "सेवा एक",
        image: "/images/img1.jpg",
        link: "/service-one",
      },
      {
        id: 2,
        title: "सेवा दो",
        image: "/images/img2.jpg",
        link: "/service-two",
      },
      {
        id: 3,
        title: "सेवा तीन",
        image: "/images/img3.jpg",
        link: "/service-three",
      },
      {
        id: 4,
        title: "सेवा चार",
        image: "/images/img4.jpg",
        link: "/service-four",
      },
      {
        id: 5,
        title: "सेवा एक",
        image: "/images/img1.jpg",
        link: "/service-one",
      },
      {
        id: 6,
        title: "सेवा दो",
        image: "/images/img2.jpg",
        link: "/service-two",
      },
      {
        id: 7,
        title: "सेवा तीन",
        image: "/images/img3.jpg",
        link: "/service-three",
      },
      {
        id: 8,
        title: "सेवा चार",
        image: "/images/img4.jpg",
        link: "/service-four",
      },
      {
        id: 9,
        title: "सेवा एक",
        image: "/images/img1.jpg",
        link: "/service-one",
      },
      {
        id: 10,
        title: "सेवा दो",
        image: "/images/img2.jpg",
        link: "/service-two",
      },
      {
        id: 11,
        title: "सेवा तीन",
        image: "/images/img3.jpg",
        link: "/service-three",
      },
      {
        id: 12,
        title: "सेवा चार",
        image: "/images/img4.jpg",
        link: "/service-four",
      },
    ],
  };

  return (
    <div className="w-full  px-4 pb-6 bg-gray-50">
      <h2>{lang === "en" ? "Book>>" : "बुक"}</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {cards[lang].map((card, index) => (
          <Link
            key={card.id}
            to={card.link}
            className="min-w-[100px] xl:min-w-[240px] bg-white rounded-xl shadow-md"
          >
            <div className="w-full h-20 xl:h-40 overflow-hidden rounded-t-xl">
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full object-fill ${
                  index === 0
                    ? "object-top"
                    : index === 1
                      ? "object-center"
                      : index === 2
                        ? "object-bottom"
                        : "scale-105"
                }`}
              />
            </div>

            <div className="p-3 text-center text-sm h-10">{card.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
