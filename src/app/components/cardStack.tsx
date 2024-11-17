"use client";

import { useEffect, useRef, useState } from "react";

const colors = [
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
];

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
      className="bg-green-100 relative"
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
                {card.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}