'use client';

import { useEffect, useRef } from "react";

export default function MouseTrail() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current)
        return;

      const { clientX, clientY } = e;
      blobRef.current.animate({
        left: `${clientX - blobRef.current.offsetWidth / 2}px`,
        top: `${clientY - blobRef.current.offsetHeight / 2}px`
      }, { duration: 5000, fill: 'forwards' })
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed w-80 blur-2xl rounded-full animate-spin-slow aspect-square rotate bg-gradient-to-r from-orange-200 to-orange-100"
    ></div>
  );
}