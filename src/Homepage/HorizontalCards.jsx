import React from "react";
import { Link } from "react-router-dom";

const HorizontalScrollCards = () => {
  const cards = [
    {
      id: 1,
      title: "Service One",
      image: "/images/img1.jpg",
      link: "/service-one",
    },
    {
      id: 2,
      title: "Service Two",
      image: "/images/img2.jpg",
      link: "/service-two",
    },
    {
      id: 3,
      title: "Service Three",
      image: "/images/img3.jpg",
      link: "/service-three",
    },
    {
      id: 4,
      title: "Service Four",
      image: "/images/img4.jpg",
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
      title: "Service Three",
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
      title: "Service Three",
      image: "/images/img3.jpg",
      link: "/service-three",
    },
    {
      id: 12,
      title: "Service Four",
      image: "/images/img4.jpg",
      link: "/service-four",
    },
  ];

  return (
    <div className="w-full px-4 py-6 bg-gray-50">
      <h2>Book</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {cards.map((card, index) => (
          <Link
            key={card.id}
            to={card.link}
            className="min-w-[240px] bg-white rounded-xl shadow-md"
          >
            <div className="w-full h-40 overflow-hidden rounded-t-xl">
              <img
                src={card.image}
                alt={card.title}
                className={`w-full h-full object-cover ${
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

            <div className="p-3 text-center font-medium">{card.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
