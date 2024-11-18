import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-center py-2 shadow-lg border-t">
      <div className="container w-3/4 mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
          {/* Links */}
          <Link href="/opis" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Opis Projektu
          </Link>

          {/* GitHub Link */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-700 hover:text-gray-900 transition-colors" />
          </a>

          {/* Copyright Information */}
          <div className="text-gray-500 text-xs">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

