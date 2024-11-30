import { FaGithub, FaReact } from "react-icons/fa";
import { RiNextjsFill } from 'react-icons/ri';
import { SiSpring, SiSpringboot } from "react-icons/si";


interface Tool {
  name: string;
  icon: React.ReactNode;
  color: string;
  mainPage: string;
}


const tools: Tool[] = [
  {
    name: "React",
    icon: <FaReact size={48} className="text-[#61DAFB]" />,
    color: "#61DAFB",
    mainPage: "https://react.dev"
  },
  {
    name: "NextJS",
    icon: <RiNextjsFill
      size={48}
      className="text-black dark:text-white"
    />,
    color: "#000000",
    mainPage: "https://nextjs.org/"
  },
  {
    name: "Spring",
    icon: <SiSpring size={48} className="text-[#6DB33F]" />,
    color: "#6DB33F",
    mainPage: "https://spring.io/"
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={48} className="text-[#6DB33F]" />,
    color: "#6DB33F",
    mainPage: "https://spring.io/projects/spring-boot",
  },
  {
    name: "Flutter",
    icon: <img src="zesp11_page/flutter.svg" alt="Flutter Logo" className="w-12 h-12" />,
    color: "#02569B",
    mainPage: "https://flutter.dev/",
  },
  {
    name: "Github",
    icon: <FaGithub
      size={48}
      className="text-black dark:text-white"
    />,
    color: "#181717",
    mainPage: "https://github.com/"
  },
];



export default function Page() {
  return (
    <>
      <section className="h-screen grid place-content-center bg-gray-200 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Cel projektu
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Nasz projekt ma na celu integrację zespołów poprzez mobilne aplikacje, które umożliwiają wykonywanie zadań i interakcję z innymi członkami zespołu w czasie rzeczywistym. Wykorzystujemy technologie mobilne, aby dostarczyć narzędzia do zarządzania projektami i wykonywania zadań za pomocą telefonów.
          </p>
        </div>
      </section>

      {/* Gamebook Mobile App Section */}
      <section className="h-screen grid place-content-center bg-gray-100 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Aplikacja mobilna do tworzenia książek przygodowych
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Nasza aplikacja mobilna pozwala na tworzenie, edytowanie i zarządzanie książkami przygodowymi w podróży. Zapewnia łatwy dostęp do Twoich projektów oraz umożliwia szybkie dodawanie treści i wyborów.
          </p>
          <a
            href="https://example.com/mobile-app" // Replace with actual mobile app URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Zobacz aplikację mobilną
          </a>
        </div>
      </section>

      {/* Gamebook Web App Section */}
      <section className="h-screen grid place-content-center bg-gray-200 dark:bg-inherit py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Aplikacja webowa do tworzenia książek przygodowych
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Aplikacja webowa umożliwia tworzenie książek przygodowych w pełni online. Oferuje edytor tekstu, a także zaawansowane funkcje zarządzania i publikowania treści.
          </p>
          <a
            href="https://example.com/web-app" // Replace with actual web app URL
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Zobacz aplikację webową
          </a>
        </div>
      </section>


      <section className="bg-gray-100 dark:bg-inherit py-16">
        <ul className="grid gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool, i) => (
            <li
              key={i}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg shadow-lg border-2 border-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600"
            >
              <a
                href={tool.mainPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center w-full h-full"
              >
                {tool.icon}
                <span className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {tool.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
