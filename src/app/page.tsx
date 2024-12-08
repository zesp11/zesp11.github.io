'use client';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter'; // Install this package

export default function Page() {
  const parallaxRef = useRef<IParallax | null>(null);

  const handleScrollToNext = (pageIndex: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(pageIndex);
    }
  };

  return (
    <main className="relative mt-8">
      <Parallax ref={parallaxRef} pages={4}>
        {/* Welcome Section */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ backgroundColor: '#1e40af' }}
          onClick={() => handleScrollToNext(1)}
        >
          <div className="h-full grid place-content-center text-center px-4">
            <h1 className="text-white text-4xl font-bold mb-6">
              Witaj na platformie <span className="text-yellow-400">Zespół XI</span>
            </h1>
            <p className="text-gray-100 text-lg max-w-md mx-auto mb-8">
              Nasza platforma wspiera zespoły w realizacji wspólnych celów, łącząc
              ludzi i umożliwiając kreatywną współpracę.
            </p>
            <div className="text-yellow-300 text-xl font-medium mb-6">
              {/* Typing effect */}
              <Typewriter
                words={[
                  'Rozwiązuj zadania zespołowe',
                  'Twórz interaktywne książki',
                  'Integruj się z innymi zespołami',
                  'Korzystaj z najnowszych technologii',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(1)}
            >
              Odkryj funkcje
            </button>
          </div>
        </ParallaxLayer>

        {/* Game Book Creator */}
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{ backgroundColor: '#2563eb' }}
          onClick={() => handleScrollToNext(2)}
        >
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-3xl font-bold mb-4">Tworzenie Książek</h2>
            <p className="text-gray-100 text-lg max-w-lg mx-auto mb-6">
              Twórz i organizuj interaktywne książki zespołowe, które ożywią Twoje
              historie w aplikacjach mobilnych.
            </p>
            <button
              className="px-6 py-3 bg-green-500 hover:bg-green-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Wypróbuj narzędzie
            </button>
          </div>
        </ParallaxLayer>

        {/* Mobile App Integration */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{ backgroundColor: '#374151' }}
          onClick={() => handleScrollToNext(3)}
        >
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-gray-100 text-3xl font-bold mb-4">Integracja Mobilna</h2>
            <p className="text-gray-200 text-lg max-w-lg mx-auto mb-6">
              Korzystaj z aplikacji mobilnej, aby śledzić postępy, współpracować z
              innymi zespołami i tworzyć wspólne historie.
            </p>
            <button
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-gray-100 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              Zobacz aplikację
            </button>
          </div>
        </ParallaxLayer>

        {/* Technologies Used */}
        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{ backgroundColor: '#111827' }}
        >
          <div className="h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-3xl font-bold mb-4">Technologie, które używamy</h2>
            <p className="text-gray-300 text-lg max-w-lg mx-auto mb-6">
              Nasza platforma opiera się na najnowszych technologiach, aby zapewnić
              płynną współpracę i twórczą swobodę:
            </p>
            <ul className="text-gray-300 text-lg mt-4 list-disc list-inside">
              <li>Spring & Spring Boot</li>
              <li>Flutter</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}