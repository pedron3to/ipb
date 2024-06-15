import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const images = [
  {
    imageUrl: "/church1.jpg",
    headline: "Gather with us across our locations",
    buttonText: "Our gathering locations",
    title: "Gathering",
  },
  {
    imageUrl: "/church2.jpg",
    headline: "Let Us Start",
    buttonText: "Let us start",
    title: "Let us start",
  },
  {
    imageUrl: "/church3.jpg",
    headline: "Help us make a difference in the community",
    buttonText: "Our gathering locations",
    title: "Helping hands",
  },
  {
    imageUrl: "/church4.jpg",
    headline: "Explore our Woman to Woman page",
    buttonText: "Keep updated with ",
    title: "Woman to woman",
  },
];

const tabColors = [
  "rgb(0, 182, 102)", // Green
  "rgb(100, 101, 255)", // Blue
  "rgb(236, 182, 131)", // Orange
  "rgb(135, 74, 255)", // Purple
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<any>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle mouse/touch events
  const handleMouseDown = (e: any) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: any) => {
    if (!dragging) return;

    const diff = e.clientX - startX;
    if (Math.abs(diff) > 50) {
      // Swipe threshold: 50 pixels
      if (diff > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
      setDragging(false); // Stop dragging once swiped
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const container = containerRef?.current;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mouseleave", handleMouseUp); // If the mouse leaves the container, reset dragging
    return () => {
      // Cleanup listeners
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div
      className="relative h-screen"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={(e) => handleMouseDown(e.touches[0])}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 w-full h-full transition-opacity duration-500  ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-1/3 left-0 md:left-10 px-4 md:px-8 md:py-8 text-left">
            <h2 className="text-[32px] leading-[42px] md:text-[52px] font-bold text-white max-w-[600px] md:leading-[62px] mb-12">
              {image.headline}
            </h2>
            <Button
              className="text-white"
              style={{ backgroundColor: `${tabColors[index]}` }}
            >
              {image.buttonText.toUpperCase()}
            </Button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-center absolute bottom-4 left-4 md:left-10 transform -translate-x-1/5 flex space-x-2 md:ml-4">
        <div className="flex flex-col mr-4 mt-32 hidden sm:block">
          <button
            className=" transform -translate-y-1/2  text-white rounded-full md:p-2"
            onClick={goToPrevious}
          >
            <svg width="42" height="44" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.085 42c-.761 0-1.463-.121-2.085-.36a48.03 48.03 0 0 1-7.287-3.41c-2.238-1.268-4.505-2.858-6.733-4.726-1.019-.867-1.713-1.98-2.012-3.226A35.812 35.812 0 0 1 2 22c0-2.728.34-5.542 1.011-8.363.31-1.189.917-2.227 1.759-3.021 2.197-2.013 4.328-3.583 6.527-4.81A40.507 40.507 0 0 1 19.134 2.3c1.2-.4 2.531-.401 3.74.003a40.535 40.535 0 0 1 7.842 3.51c2.357 1.387 4.544 2.999 6.504 4.792a5.666 5.666 0 0 1 1.773 3.048C39.659 16.273 40 19.093 40 22c0 2.728-.34 5.542-1.011 8.363-.317 1.214-.945 2.259-1.822 3.04-2.179 1.996-4.31 3.565-6.507 4.791a37.905 37.905 0 0 1-7.706 3.503 5.99 5.99 0 0 1-1.869.304zm.898-26.112L15.62 21.81a.825.825 0 0 0 0 1.212l6.364 5.923a.82.82 0 0 0 1.165-.044.829.829 0 0 0-.043-1.168l-5.714-5.318 5.713-5.317a.828.828 0 0 0 .044-1.168c-.554-.236-.942-.25-1.165-.043z"
                stroke="#FFF"
                stroke-width="2.2"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            className="transform -translate-y-1/2 text-white rounded-full p-2"
            onClick={goToNext}
          >
            <svg width="42" height="44" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.915 42c.761 0 1.463-.121 2.085-.36a48.03 48.03 0 0 0 7.287-3.41c2.238-1.268 4.505-2.858 6.733-4.726 1.019-.867 1.713-1.98 2.012-3.226.643-2.701.968-5.486.968-8.279 0-2.728-.34-5.542-1.011-8.363-.31-1.189-.917-2.227-1.759-3.021-2.197-2.013-4.328-3.583-6.527-4.81A40.507 40.507 0 0 0 22.866 2.3a5.944 5.944 0 0 0-3.74.003 40.535 40.535 0 0 0-7.842 3.51 38.743 38.743 0 0 0-6.504 4.792 5.666 5.666 0 0 0-1.773 3.048C2.341 16.273 2 19.093 2 22c0 2.728.34 5.542 1.011 8.363.317 1.214.945 2.259 1.822 3.04 2.179 1.996 4.31 3.565 6.507 4.791a37.905 37.905 0 0 0 7.706 3.503 5.99 5.99 0 0 0 1.869.304zm-.898-26.112l6.364 5.923a.825.825 0 0 1 0 1.212l-6.364 5.923a.82.82 0 0 1-1.165-.044.829.829 0 0 1 .043-1.168l5.714-5.318-5.713-5.317a.828.828 0 0 1-.044-1.168c.554-.236.942-.25 1.165-.043z"
                stroke="#FFF"
                stroke-width="2.2"
                fill="none"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {images.map((i, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-full"
          >
            <div
              className={`w-16 md:w-10 h-1 transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              style={{
                backgroundColor:
                  index === currentIndex
                    ? tabColors[index % tabColors.length]
                    : "gray",
              }}
            />
            <div
              className={`hidden sm:block w-full h-1 transition-all text-[20px] font-bold mt-4 duration-300 ${
                index === currentIndex
                  ? "text-white opacity-100"
                  : "text-white opacity-30"
              }`}
            >
              {i.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
