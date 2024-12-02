import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-100 dark:bg-inherit text-gray-800 dark:text-gray-200">
      <main className="text-center p-8">
        {/* Large Error Message */}
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">
          Ups! Strona, której szukasz, nie została odnaleziona.
        </p>

        {/* Call-to-Action */}
        <Link
          href="/"
          className="text-lg font-medium px-6 py-3 bg-blue-500 dark:bg-opacity-20 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors"
        >
          Powrót do strony głównej
        </Link>
      </main>
    </div>
  );
}