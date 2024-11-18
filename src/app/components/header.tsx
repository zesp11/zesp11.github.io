'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";

const links = [
  { url: "/posty", label: "Posty" },
  { url: "/harmonogram", label: "Harmonogram" },
  { url: "/czlonkowie", label: "Czlonkowie" },
  { url: "/opis", label: "Opis Projektu" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0)
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
        // setIsMenuOpen(false);  // optional?
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if ((navRef.current && !navRef.current.contains(event.target as Node))
        && (buttonRef.current && !buttonRef.current.contains(event.target as Node))) {
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
          ref={buttonRef}
        >
          <AiOutlineMenu size={24} color="black" />
        </button>

      </section>


      <nav className={`
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
           transition-transform flex absolute top-full w-48 sm:w-56 right-0 h-screen flex-col gap-2 text-sm p-2 bg-white border border-gray-200 shadow-lg
           `}
        ref={navRef}
      >
        {links.map((l, i) => (
          <Link
            href={l.url}
            key={i}
            className={`
              font-semibold text-center border-gray-100 border-b px-3 py-1 my-1 rounded text-gray-800 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-150
              ${pathname === l.url ? 'bg-foreground text-background' : ''}
              `}
            onClick={() => setIsMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
