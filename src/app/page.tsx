'use client';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { TbTopologyStarRing, TbTopologyComplex, TbTopologyRing2, TbTopologyRing3, TbTopologyBus, TbTopologyStarRing2, TbDownload } from "react-icons/tb";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { useRef } from 'react';
import Footer from './components/footer';
import { Montserrat } from "next/font/google";
import Link from 'next/link';
import { FaChevronDown, FaCompass, FaFeatherAlt } from 'react-icons/fa';
import { FaWandSparkles } from "react-icons/fa6";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you need
  display: 'swap',       // Optimize font rendering
});

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
            backgroundImage: "linear-gradient(0deg, hsl(var(--background)) 50%, #FA802F 50%)",
          }}
        />


        <ParallaxLayer
          offset={0}
          speed={0.5}
          className='relative grid place-content-center h-full'
        >
          <h1
            className="text-[21vw] lg:text-[18vw] absolute top-10 left-1/2 -translate-x-1/2 text-white font-bold text-center text-nowrap"
            style={{
              fontFamily: montserrat.style.fontFamily,
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',
            }}
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
        >
          <div className="bg-black bg-opacity-60 py-4 sm:px-6 sm:py-8 text-center rounded space-y-4">
            <h1 className="text-white text-xl text-nowrap sm:text-4xl font-bold">
              Witamy na stronie <span className="text-accent">Zespołu XI</span>
            </h1>
            <p className="text-gray-100 sm:text-lg max-w-lg mx-auto px-2">
              Nasz projekt ułatwia integrację w zespole dzięki wspólnemu odkrywaniu opowieści, poznawaniu nowych miejsc i budowie świata na podstawie podejmowanych decyzji.
            </p>
            <div className="font-bold mb-6 text-lg sm:text-3xl text-white">
              <TypeAnimation
                sequence={[
                  'Zintegruj się z zespołem!',
                  1500,
                  'Twórz wyjątkowe historie!',
                  1500,
                  'Odkrywaj nowe miejsca!',
                  1500,
                  'Poznawaj inspirujących ludzi!',
                  1500
                ]}
                wrapper="div"
                speed={40}
                repeat={Infinity}
              />
            </div>

            <div className='flex justify-center items-center'>
              <button
                className="flex items-center gap-2 sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
                onClick={() => handleScrollToNext(1)}
              >
                <span>
                  Zacznij odkrywać!
                </span>
                <FaCompass size={24} />
              </button>
            </div>
          </div>

          <ScrollIndicatorCentered onClick={() => handleScrollToNext(1)}/>
        </ParallaxLayer>

        {/* Gamebook Creator Section */}
        <ParallaxLayer
          offset={1}
          speed={0.8}
          className='relative flex justify-end items-center pr-8'
        >
          <div className='lg:absolute lg:left-1/3 lg:ml-16'>
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
        >
          <div className="text-center px-4 bg-black bg-opacity-50 py-6 rounded">
            <h2 className="text-xl sm:text-4xl font-bold mb-6">Gamebook Creator</h2>
            <p className="mb-4 sm:text-lg">
              Stwórz interaktywne książki przygodowe, które angażują graczy w pełni
              dynamiczne historie.
            </p>
            <div className='flex justify-center'>
              <button
                className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center justify-center space-x-2"
                onClick={() => handleScrollToNext(2)}
              >
                <span>Twórz teraz</span>
                <FaWandSparkles size={24} />
              </button>
            </div>
          </div>

          <ScrollIndicatorCentered onClick={() => handleScrollToNext(2)}/>
        </ParallaxLayer>

        {/* Mobile App Section */}

        <ParallaxLayer
          offset={2}
          speed={0.8}
          className="relative grid place-content-center 
    bg-[linear-gradient(11deg,hsl(var(--background))_28%,#9C8B73_50%,#9C8B73_50%,hsl(var(--background))_67%)]
    dark:bg-[linear-gradient(11deg,hsl(var(--background))_28%,#21262d_50%,#21262d_50%,hsl(var(--background))_67%)]"
        />
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
        >
          <div className="bg-black bg-opacity-50 px-4 py-6 rounded text-center">
            <h2 className="text-xl sm:text-4xl font-bold mb-6">Aplikacja Mobilna</h2>
            <p className="mb-4 sm:text-lg">
              Zawsze miej swoje książki przygodowe pod ręką dzięki naszej aplikacji
              mobilnej.
            </p>

            <div className='flex justify-center'>
              <button
                className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center justify-center space-x-2"
                onClick={() => handleScrollToNext(3)}
              >
                <TbDownload className="text-white" size={20} />
                <span>Pobierz aplikację</span>
              </button>
            </div>
          </div>

          <ScrollIndicatorCentered onClick={() => handleScrollToNext(3)}/>
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

              <div className='flex justify-center'>
                <Link
                  className="sm:text-lg px-3 py-2 sm:px-6 sm:py-3 bg-accent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 flex items-center justify-center space-x-2"
                  href="/opis"
                >
                  <span>Rozpocznij teraz</span>
                  <FaFeatherAlt size={24} />
                </Link>
              </div>
            </div>
          </div>

          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main >
  );
}

function ScrollIndicator({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-8 animate-bounce flex flex-col items-center hover:text-black text-gray-800 dark:text-white/60 dark:hover:text-white transition-colors"
    >
      <span className="text-sm mb-2">Przewiń w dół</span>
      <FaChevronDown className="text-2xl" />
    </button>
  );
}

function ScrollIndicatorCentered({onClick}: {onClick: () => void}) {
  return (
    <div className='flex justify-center'>
      <ScrollIndicator onClick={onClick}/>
    </div>

  );
}