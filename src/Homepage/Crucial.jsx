import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "1000046237-removebg-preview.png",
    link: "/page1",
    className: "md:h-84 h-50 w-full rounded-2xl object-cover",
  },
  {
    src: "Homeposter1.png",
    link: "/page2",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
  {
    src: "1000046237-removebg-preview.png",
    link: "/page3",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
  {
    src: "Homeposter1.png",
    link: "/page2",
    className: "md:h-84 h-50 w-full rounded-2xl",
  },
];

// ✅ Duplicate first image for infinite loop
const slides = [...images, images[0]];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  // ✅ Auto-slide
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000); // 5 second interval
  };

  // ✅ Smooth jump back for infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    } else {
      setIsTransitioning(true);
    }
  };

  // ✅ Image click navigate
  const handleImageClick = () => {
    navigate(slides[currentIndex % images.length].link);
  };

  // ✅ Dot click
  const handleDotClick = (idx) => {
    setCurrentIndex(idx);
    setIsTransitioning(true);
  };

  return (
    <div className="pt-3 overflow-hidden relative w-[90vw] mx-auto rounded-2xl">
      {/* Slide container */}
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-[2000ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`Slide ${idx + 1}`}
            onClick={handleImageClick}
            className={`w-full flex-shrink-0 cursor-pointer ${img.className}`}
          />
        ))}
      </div>

      {/* Dots with progress animation */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-10 md:w-12 bg-gray-300 rounded-full overflow-hidden cursor-pointer`}
            onClick={() => handleDotClick(idx)}
          >
            <div
              className={`h-full bg-gray-500 transition-all duration-[5000ms] ease-linear`}
              style={{
                width: idx === (currentIndex % images.length) ? "100%" : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;