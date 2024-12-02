import MouseTrail from "./components/blurryMouseTrail";
import ToolsUsed from "./components/toolsSection";

export default function Page() {
  return (
    <>
      <MouseTrail />
      <section className="h-[90vh] p-4 sm:p-8 grid place-content-center bg-gray-200 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center z-10 ">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Cel projektu
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Projekt GoBook ma na celu stworzenie aplikacji wieloplatformowej, która umożliwi użytkownikom tworzenie, zarządzanie i odczytywanie interaktywnych książek przygodowych (gamebook).
          </p>
        </div>
      </section>

      {/* Gamebook Mobile App Section */}
      <section className="h-screen grid place-content-center bg-gray-100 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center z-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Aplikacja mobilna do tworzenia książek przygodowych
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Nasza aplikacja mobilna pozwala na tworzenie, edytowanie i zarządzanie książkami przygodowymi w podróży. Zapewnia łatwy dostęp do Twoich projektów oraz umożliwia szybkie dodawanie treści i wyborów.
          </p>
          <a
            href="https://github.com" // Replace with actual mobile app URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 dark:bg-opacity-20 text-white px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors"
          >
            Zobacz aplikację mobilną
          </a>
        </div>
      </section>

      {/* Gamebook Web App Section */}
      <section className="h-screen grid place-content-center bg-gray-200 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center z-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Aplikacja webowa do tworzenia książek przygodowych
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Aplikacja webowa umożliwia tworzenie książek przygodowych w pełni online. Oferuje edytor tekstu, a także zaawansowane funkcje zarządzania i publikowania treści.
          </p>
          <a
            href="https://github.com" // Replace with actual web app URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 dark:bg-opacity-20 text-white px-8 py-3 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-900 transition-colors"
          >
            Zobacz aplikację webową
          </a>
        </div>
      </section>

      <div className="container mx-auto">
        <ToolsUsed />
      </div>
    </>
  );
}
