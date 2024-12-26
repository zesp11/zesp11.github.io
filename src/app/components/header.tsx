'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const links = [
  // { url: "/posty", label: "Posty" },
  { url: "/harmonogram", label: "Harmonogram" },
  { url: "/zespol", label: "Zespół" },
  { url: "/opis", label: "Opis Projektu" },
  { url: "/docs", label: "Dokumentacja" },
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
    <header className={`z-50 shadow dark:text-background dark:bg-card flex justify-between items-center p-1 sm:p-4 w-screen transform transition-transform duration-200 fixed ${isHeaderVisible ? "translate-y-0" : '-translate-y-full'}`}>
      <Link
        className="p-1 flex gap-1"
        href={"/"}
      >
        <div className="aspect-square h-6 bg-background rotate-[15deg]"></div>
        <div className="text-xl font-bold ml-2 hidden sm:block">GoAdventure</div>
      </Link>

      {/* Mobile menu */}
      <div className="md:hidden">
        <section className="relative flex items-center">
          <button
            className="pr-2 mr-2"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            ref={buttonRef}
          >
            <AiOutlineMenu size={24} />
          </button>

        </section>


        <section className={`
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  transition-transform absolute top-full w-52 sm:w-72 right-0 h-screen text-sm p-2 bg-background border dark:border-gray-900 dark:shadow-gray-800 border-gray-200 shadow-lg
`}
          ref={navRef}
        >
          <nav className="flex flex-col gap-2">
            {links.map((l, i) => (
              <Link
                href={l.url}
                key={i}
                className={`
          font-semibold text-center dark:border-gray-600 border-gray-100 border-b px-3 py-1 my-1 rounded hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-accent dark:hover:text-primary transition-colors duration-150
          ${pathname === l.url
                    ? 'bg-foreground text-background'  // Selected item colors
                    : 'dark:foreground text-gray-800'}  // Default colors
        `}
                onClick={() => setIsMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex justify-end mt-2 pr-2">
            <ModeToggle />
          </div>
        </section>
      </div>

      {/* Navigation for larger screens */}
      <section className="hidden md:flex items-center mr-4">
        <nav className="flex mr-4 gap-4 items-center">
          {links.map((l, i) => (
            <Link
              href={l.url}
              key={i}
              className={`font-medium text-sm transition-colors duration-150 ${pathname === l.url ? "border-b-2 border-accent" : ""
                }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <ModeToggle />
      </section>
    </header>
  );
}
