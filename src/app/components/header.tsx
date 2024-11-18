'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  { url: "/posty", label: "Posty" },
  { url: "/harmonogram", label: "Harmonogram" },
  { url: "/czlonkowie", label: "Czlonkowie" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [lastScrollY]);

  return (
    <header className={`bg-background shadow flex justify-between items-center p-1 w-screen transform transition-transform duration-200 fixed ${isHeaderVisible ? "translate-y-0" : '-translate-y-full'}`}>
      <Link
        className="p-1"
        href={"/"}
      >
        <div className="aspect-square h-6 bg-foreground rotate-[15deg]"></div>
      </Link>

      <section className="relative flex items-center">
        <button
          className="pr-2"
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <AiOutlineMenu size={24} color="black"/>
        </button>

        <nav
          className={`${isMenuOpen ? "flex scale-y-100 opacity-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
            } flex-col gap-2 text-sm p-2 bg-white border border-gray-200 absolute top-full right-0 mt-2 shadow-lg rounded transform origin-top transition-transform duration-200 ease-out z-20`}
          ref={navRef}
        >
          {links.map((l, i) => (
            <Link
              href={l.url}
              key={i}
              className="font-semibold text-center px-3 py-2 rounded text-gray-800 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </section>
    </header>
  );
}
