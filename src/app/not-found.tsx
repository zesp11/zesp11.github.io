import Link from "next/link";
import Footer from "./components/footer";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full bg-background text-foreground">
        <main className="text-center p-8">
          {/* Large Error Message */}
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-2xl mb-6">
            Ups! Strona, której szukasz, nie została odnaleziona.
          </p>

          {/* Call-to-Action */}
          <Link
            href="/"
            className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          >
            Powrót do strony głównej
          </Link>
        </main>

      </div>
      <Footer />
    </>
  );
}