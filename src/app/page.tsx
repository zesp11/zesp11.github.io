'use client';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TbTopologyStarRing, TbTopologyComplex, TbTopologyRing2, TbTopologyRing3, TbTopologyBus, TbTopologyStarRing2 } from "react-icons/tb";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { useRef } from 'react';
import Footer from './components/footer';

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
          speed={2}
          className="relative grid place-content-center h-full"
          style={{
            backgroundImage: "linear-gradient(0deg, #F3E8CA 50%, #FA802F 50%)",
          }}
        >
          <h1
            className="text-[21vw] absolute top-10 left-1/2 -translate-x-1/2 text-white font-bold text-center text-nowrap"
          >
            Zespół 11
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          className='relative grid place-content-center'
        >
          <div className=''>
            <Image
              src={'zesp11_page/main.png'}
              alt=''
              width={400}
              height={300}
              className='h-auto w-full animate-floating'
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.3}
          className="grid place-content-center"
          onClick={() => handleScrollToNext(1)}
        >
          <div className="bg-black bg-opacity-60 py-4 sm:px-6 sm:py-8 text-center rounded space-y-4">
            <h1 className="text-white text-xl text-nowrap sm:text-4xl font-bold">
              Witaj na platformie <span className="text-accent">Zespół XI</span>
            </h1>
            <p className="text-gray-100 sm:text-lg max-w-md mx-auto px-2">
              Nasza platforma wspiera zespoły w realizacji wspólnych celów, łącząc
              ludzi i umożliwiając kreatywną współpracę.
            </p>
            <div className="font-bold mb-6 text-lg sm:text-4xl text-white">
              <TypeAnimation
                sequence={[
                  'Integracja z zespołem',
                  1000,
                  'Twórz własne historie',
                  1000,
                  'Poznawaj nowe miejsca',
                  1000,
                  'Spotykaj nowych ludzi',
                  1000
                ]}
                wrapper="div"
                speed={40}
                repeat={Infinity}
              />
            </div>

            <button
              className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(1)}
            >
              Odkryj funkcje
            </button>
          </div>
        </ParallaxLayer>

        {/* Gamebook Creator Section */}
        <ParallaxLayer
          offset={1}
          speed={0.8}
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
        <ParallaxLayer
          offset={1}
          speed={0.4}
          className="grid place-content-center text-white py-20"
          onClick={() => handleScrollToNext(2)}
        >
          <div className="text-center px-4 bg-black bg-opacity-50 py-6 rounded">
            <h2 className="text-xl sm:text-4xl font-bold mb-6">Gamebook Creator</h2>
            <p className="mb-4 sm:text-lg">
              Stwórz interaktywne książki przygodowe, które angażują graczy w pełni
              dynamiczne historie.
            </p>
            <button
              className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(2)}
            >
              Twórz teraz
            </button>
          </div>
        </ParallaxLayer>

        {/* Mobile App Section */}
        <ParallaxLayer
          offset={2}
          speed={0.8}
          className="relative grid place-content-center"
          style={{
            backgroundImage: "linear-gradient(11deg, #F3E8CA 28%, #9C8B73 50%, #9C8B73 50%, #F3E8CA 67%)",
          }}
        >
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          className='relative hidden sm:block'
        >
          <div className="text-accent absolute top-1/3 right-28">
            <TbTopologyStarRing size={64} />
          </div>
          <div className="text-accent absolute top-10 right-1/4">
            <TbTopologyComplex size={72} />
          </div>
          <div className="text-accent absolute bottom-10 left-1/10">
            <TbTopologyBus size={56} />
          </div>
          <div className="text-accent absolute top-20 left-1/2">
            <TbTopologyRing3 size={96} />
          </div>
          <div className="text-accent absolute bottom-1/3 left-1/3">
            <TbTopologyRing2 size={72} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.2}
          className='relative'
        >
          <div className="text-accent absolute bottom-1/4 right-1/4">
            <TbTopologyRing2 size={64} />
          </div>
          <div className="text-accent absolute top-1/4 right-1/4">
            <TbTopologyComplex size={48} />
          </div>
          <div className="text-accent absolute top-1/3 left-1/3">
            <TbTopologyRing3 size={48} />
          </div>
          <div className="text-accent absolute top-1/4 right-3/4">
            <TbTopologyStarRing2 size={88} />
          </div>
          <div className="text-accent absolute top-1/2 left-1/4">
            <TbTopologyStarRing size={32} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.8}
          className='relative hidden sm:block'
        >
          <div className="text-accent absolute bottom-8 right-1/2">
            <TbTopologyComplex size={54} />
          </div>
          <div className="text-accent absolute top-4 left-4">
            <TbTopologyStarRing size={64} />
          </div>
          <div className="text-accent absolute bottom-1/2 left-1/2">
            <TbTopologyStarRing size={108} />
          </div>
          <div className="text-accent absolute bottom-1/4 right-10">
            <TbTopologyStarRing size={64} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.1}
          className='relative flex justify-end md:block items-center pr-8'
        >
          <Image
            src={'zesp11_page/phone.png'}
            alt=''
            width={400}
            height={300}
            className='h-72 w-auto sm:w-[25vw] lg:w-[20vw] md:absolute md:top-1/3 lg:top-1/4 md:right-1/4 sm:h-auto animate-floating'
          />
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={0.3}
          className="text-white py-20 grid place-content-center"
          onClick={() => handleScrollToNext(3)}
        >
          <div className="bg-black bg-opacity-50 px-4 py-6 rounded text-center">
            <h2 className="text-xl sm:text-4xl font-bold mb-6">Aplikacja Mobilna</h2>
            <p className="mb-4 sm:text-lg">
              Zawsze miej swoje książki przygodowe pod ręką dzięki naszej aplikacji
              mobilnej.
            </p>
            <button
              className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              onClick={() => handleScrollToNext(3)}
            >
              Pobierz aplikację
            </button>
          </div>
        </ParallaxLayer>


        {/* Final Section */}
        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            backgroundImage: "url('zesp11_page/logos.png')",
            backgroundSize: "cover",
            backgroundPosition: 'center',
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={0.9}
          style={{
            backgroundImage: "url('zesp11_page/clouds.png')",
            backgroundSize: "cover",
            backgroundPosition: 'center',
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={1.3}
          style={{
            backgroundImage: "url('zesp11_page/hero.png')",
            backgroundSize: "cover",
            backgroundPosition: 'center',
          }}
        />
        <ParallaxLayer
          offset={3}
          speed={0.2}
          onClick={() => handleScrollToNext(0)}
          className='flex justify-between flex-col'
        >
          <div
            className="grid place-content-center py-20"
          >
            <div className="text-center px-4 text-white bg-black bg-opacity-50 py-6 rounded">
              <h2 className="text-xl font-bold mb-6 sm:text-4xl">Gotowy do działania?</h2>
              <p className="mb-8 sm:text-lg">
                Dołącz do nas i stwórz swoje interaktywne książki przygodowe!
              </p>
              <button
                className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
              >
                Rozpocznij teraz
              </button>
            </div>
          </div>

          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main >
  );
}