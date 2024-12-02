import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card text-center py-2 shadow-lg border-t">
      <div className="container w-3/4 mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          {/* Links */}
          <div className='flex gap-4 items-center'>
            <Link href="/opis" className="hover:text-gray-800 transition-colors dark:hover:text-gray-400 text-sm font-medium">
              Opis Projektu
            </Link>

            {/* GitHub Link */}
            <a href="https://github.com/Serp-ent/zesp11" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-gray-800 transition-colors dark:hover:text-gray-400" />
            </a>
          </div>

          {/* Copyright Information */}
          <div className="text-xs">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

