"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  direction?: "left" | "right";
}

export default function AnimatedCard({
  children,
  direction = "left",
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const current=  cardRef.current;
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const initialX = direction === 'left' ? -100 : 100;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: initialX }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
