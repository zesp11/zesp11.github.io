"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const colors = [
  "bg-blue-100",
  "bg-blue-200",
  "bg-blue-300",
  "bg-blue-400",
  "bg-blue-500",
];

export default function CardStack() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="bg-green-100 d h-[400vh] relative">
      <div className="sticky bg-green-200 top-[20%]">
        {Array.from({ length: 5 }).map((_, i) => {
          return (
            <motion.div
              className={`absolute top-0 left-0 right-0 rounded shadow mx-auto aspect-[3/4] w-2/3 grid place-content-center text-2xl 
              ${colors[i % colors.length]}`}
              key={i}
              style={{
                transform: `translateY(${((i % 4) - 2) * -1}%) rotate(${((i % 4) - 2) * -2}deg)`,
                zIndex: i,
              }}
            >
              {i + 1}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
