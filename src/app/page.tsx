'use client';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';
import { useRef } from 'react';

export default function Page() {
  const parallaxRef = useRef<IParallax | null>(null);

  const handleScrollToNext = (pageIndex: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(pageIndex);
    }
  };

  return (
    <main className="relative mt-8">
      <Parallax ref={parallaxRef} pages={5}>
        {/* Welcome Section */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="bg-background"
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
              <div className="relative">
                <span className="z-10 animated-gradient-text">
                  TODO: Kilka tekstow
                  {/* Rozwiązuj zadania zespołowe */}
                </span>
              </div>
            </div>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(1)}
            >
              Odkryj funkcje
            </button>
          </div>
        </ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={1.1}
          className='relative flex justify-end items-center pr-8'
        >
          <div>
            <Image
              src={'zesp11_page/creator-usage.webp'}
              alt=''
              width={400}
              height={300}
              className='h-1/4 w-auto'
            />
          </div>
        </ParallaxLayer>
        {/* Gamebook Creator Section */}
        <ParallaxLayer
          offset={1}
          speed={0.4}
          className="grid place-content-center text-white py-20"
          onClick={() => handleScrollToNext(2)}
        >
          <div className="text-center px-4 bg-black bg-opacity-40 py-6 rounded">
            <h2 className="text-3xl font-bold mb-6">Gamebook Creator</h2>
            <p className="text-lg mb-4">
              Stwórz interaktywne książki przygodowe, które angażują graczy w pełni
              dynamiczne historie.
            </p>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(2)}
            >
              Twórz teraz
            </button>
          </div>
        </ParallaxLayer>



        {/* Mobile App Section */}

        <ParallaxLayer
          offset={2}
          speed={1}
          className='relative flex justify-end items-center pr-8'
        >
          <div>
            <Image
              src={'zesp11_page/phone.png'}
              alt=''
              width={400}
              height={300}
              className='h-3/5 w-auto'
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.3}
          className="text-white py-20 grid place-content-center"
          onClick={() => handleScrollToNext(3)}
        >
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Aplikacja Mobilna</h2>
            <p className="text-lg mb-4">
              Zawsze miej swoje książki przygodowe pod ręką dzięki naszej aplikacji
              mobilnej.
            </p>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(3)}
            >
              Pobierz aplikację
            </button>
          </div>
        </ParallaxLayer>

        {/* Features Section */}
        <ParallaxLayer
          offset={3}
          speed={0.5}
          className="grid place-content-center text-white py-20"
          onClick={() => handleScrollToNext(4)}
        >
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Funkcje</h2>
            <p className="text-lg mb-4">
              Nasza platforma oferuje wiele funkcji, które pomagają tworzyć gry, zarządzać
              postępami graczy i zapewniają pełną personalizację.
            </p>
            <ul className="text-xl list-disc list-inside">
              <li>Tworzenie interaktywnych scenariuszy</li>
              <li>Zarządzanie postępami graczy</li>
              <li>Personalizacja ścieżek i decyzji</li>
            </ul>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(4)}
            >
              Zobacz więcej
            </button>
          </div>
        </ParallaxLayer>

        {/* Final Section */}
        <ParallaxLayer
          offset={4}
          speed={0.1}
          className="grid place-content-center bg-gray-900 text-white py-20"
          onClick={() => handleScrollToNext(0)}
        >
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Gotowy do działania?</h2>
            <p className="text-lg mb-8">
              Dołącz do nas i stwórz swoje interaktywne książki przygodowe!
            </p>
            <button
              className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              Rozpocznij teraz
            </button>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main >
  );
}