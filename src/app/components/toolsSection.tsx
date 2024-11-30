import Image from "next/image";
import { FaGithub, FaReact } from "react-icons/fa";
import { RiNextjsFill } from 'react-icons/ri';
import { SiSpring, SiSpringboot } from "react-icons/si";interface Tool {

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
    icon: <Image src="zesp11_page/flutter.svg" alt="Flutter Logo" className="w-12 h-12" width={48} height={48} />,
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



export default function ToolsUsed() {
  return (
    <section className="bg-gray-100 dark:bg-inherit py-16">
      <ul className="grid gap-8 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {tools.map((tool, i) => (
          <li
            key={i}
            className="flex flex-col items-center text-center bg-gray-50 dark:bg-zinc-900 bg-opacity-90 dark:bg-opacity-30 p-6 rounded-lg shadow-lg border-2 border-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-600"
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
  );
}