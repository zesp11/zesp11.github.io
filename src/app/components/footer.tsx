import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background text-center py-6 mt-8 shadow-lg border-t">
      <div className="px-3 ">
        <div className='flex justify-between p-2'>
          {/* Links */}
          <Link href="/opis" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
            Opis Projektu
          </Link>

          {/* GitHub Link */}
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-700 hover:text-gray-900 transition-colors" />
          </a>
        </div>
        {/* Copyright Information */}
        <div className="text-gray-500 text-xs">
          <p>&copy; All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}