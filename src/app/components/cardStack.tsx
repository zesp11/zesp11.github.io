"use client";

import { useEffect, useRef, useState } from "react";

const colors = [
  "bg-gray-100",
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-200",
  "bg-gray-100",
];

const darkColors = [
  "dark:bg-gray-700",
  "dark:bg-gray-800",
  "dark:bg-gray-900",
  "dark:bg-gray-800",
  "dark:bg-gray-700",
]

interface Cards {
  title: string;
};

const cards: Cards[] = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
];

export default function CardStack() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [sectionStartPercentage, setSectionStartPercentage] = useState(0); // Store the section start percentage

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

  useEffect(() => {
    const handleSectionStart = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const sectionStart = (sectionTop + window.scrollY) / maxScroll;
        setSectionStartPercentage(sectionStart); // Set the section start percentage
      }
    };

    // Run once on mount to get the section start percentage
    handleSectionStart();

    // Optionally, recalculate if the window size changes
    window.addEventListener("resize", handleSectionStart);
    return () => {
      window.removeEventListener("resize", handleSectionStart);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-gray-950 relative"
      style={{
        height: `${2 * 100 * cards.length}vh`,
      }}
    >
      <div className="sticky top-[20%]">
        <div className="relative w-full aspect-square overflow-hidden">
          {/* Reverse the array to animate the last cards first */}
          {cards.map((card, i) => {
            // Define a threshold for each card's animation
            const step = 0.142;
            const thresholdStart = sectionStartPercentage + (cards.length - i) * step; // Custom threshold for each card
            const thresholdEnd = thresholdStart + step; // Next threshold for the card's fade out
            const direction = i % 2 != 0 ? '-100vw' : '100vw';

            return (
              <div
                key={i}
                className={`absolute top-[10%] left-0 right-0 rounded shadow mx-auto aspect-[4/5] w-48 md:w-60 grid place-content-center text-2xl ${colors[i % colors.length]} ${darkColors[i % colors.length]}`}
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
                {card.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}