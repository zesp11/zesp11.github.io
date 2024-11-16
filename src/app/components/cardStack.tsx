"use client";

import { useEffect, useRef, useState } from "react";

const colors = [
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
];

export default function CardStack() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track the scroll position
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    setScrollPosition(scrollY / maxScroll); // This gives us a scroll percentage
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const colors = ["bg-blue-200", "bg-red-200", "bg-yellow-200", "bg-purple-200", "bg-pink-200"];

  return (
    <section className="bg-green-100 h-[1000vh] relative">
      <div className="sticky top-[20%]">
        <div className="relative w-full aspect-square overflow-hidden">
          {/* Reverse the array to animate the last cards first */}
          {Array.from({ length: 5 }).map((_, i) => {
            // Define a threshold for each card's animation
            const step = 0.09;
            const thresholdStart = 0.50 + (5 - i) * step; // Custom threshold for each card
            const thresholdEnd = thresholdStart + step; // Next threshold for the card's fade out
            const direction = i % 2 != 0 ? '-100vw' : '100vw';

            return (
              <div
                key={i}
                className={`absolute top-[10%] left-0 right-0 rounded shadow mx-auto h-5/6 w-2/3 grid place-content-center text-2xl ${colors[i % colors.length]}`}
                style={{
                  rotate: `${(i % 4 - 2) * -2}deg`,
                  // Slide the cards based on scroll position
                  transform: `translateX(${scrollPosition > thresholdStart ? direction : "0"})
                  translateY(${(i % 4 - 2) * 2}px)`,
                  opacity: scrollPosition > thresholdEnd ? 0 : 1, // Fade out after passing thresholdEnd
                  transition: "transform 0.3s ease-out, opacity 0.3s ease-out", // Smooth transitions
                  zIndex: i,
                }}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}