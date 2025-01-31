import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="z-10 bg-foreground dark:bg-card dark:text-foreground text-background text-center">
      <div className="container py-1 px-2 sm:w-3/4 mx-auto sm:px-4 lg:px-8">
        <div className="flex flex-row justify-between items-center sm:gap-4 p-1 sm:p-4">
          {/* Links */}
          <div className='flex gap-2 sm:gap-4 items-center'>
            <Link href="/opis" className="text-xs sm:text-md transition-colors hover:text-accent font-medium">
              Opis Projektu
            </Link>

            {/* GitHub Link */}
            <a href="https://github.com/Serp-ent/zesp11" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="transition-colors hover:text-accent" />
            </a>
          </div>

          {/* Copyright Information */}
          <div className="text-xs">
            <p>&copy; 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

