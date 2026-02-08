import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "public/1000046237-removebg-preview.png",
    link: "/page1",
    className: "md:h-84 h-50 w-full rounded-2xl object-cover ",
  },
  {
    src: "public/Homeposter1.png",
    link: "/page2",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
  {
    src: "public/1000046237-removebg-preview.png",
    link: "/page3",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
  {
    src: "public/Homeposter1.png",
    link: "/page2",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedDots, setCompletedDots] = useState([]); // रंग बदलने के लिए
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // Start timer for slide change
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setTimeout(() => {
      // Mark current dot as completed
      setCompletedDots((prev) => {
        const newArr = [...prev];
        newArr[currentIndex] = true;
        return newArr;
      });

      // Move to next slide
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
  };

  const handleImageClick = () => {
    navigate(images[currentIndex].link);
  };

  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
    startTimer();
  };

  return (
    <div className="pt-7">
      <div className="relative w-[90vw]   border-4 border-white rounded-2xl  mx-auto">
        {/* Image */}
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className={`object-fill cursor-pointer ${images[currentIndex].className}`}
          onClick={handleImageClick}
        />

        {/* Dots */}
        <div className=" flex justify-center space-x-4 mt-4">
          {images.map((_, idx) => (
            <div
              key={idx}
              className={` h-1 rounded-full border-transparent  bg-gray-300 overflow-hidden cursor-pointer
                transition-all duration-300
               ${idx === currentIndex ? "w-12" : "w-6"}
              `}
              onClick={() => handleDotClick(idx)}
            >
              {/* Fill animation */}
              <div
                className={`h-full   ${
                  idx === currentIndex
                    ? "bg-gray-500 animate-fill"
                    : completedDots[idx]
                      ? "bg-gray-500"
                      : "bg-gray-300"
                }`}
                style={{ width: idx === currentIndex ? "0%" : "100%" }}
              ></div>
            </div>
          ))}
        </div>

        {/* Animation CSS */}
        <style>
          {`
          @keyframes fill {
            from { width: 0%; }
            to { width: 100%; }
          }
          .animate-fill {
            animation: fill 3s linear forwards;
          }
        `}
        </style>
      </div>
    </div>
  );
}

export default Carousel;
