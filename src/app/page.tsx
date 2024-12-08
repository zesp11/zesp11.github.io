'use client';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Page() {
  return (
    <main className='relative mt-8'>
      <Parallax pages={3}>
        {/* Background layer */}
        <ParallaxLayer offset={0} speed={0.5} style={{ backgroundColor: '#0f172a' }}>
          <div className="h-screen flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold">Welcome to the Parallax Effect</h1>
          </div>
        </ParallaxLayer>

        {/* Midground layer */}
        <ParallaxLayer offset={1} speed={0.3} style={{ backgroundColor: '#1e293b' }}>
          <div className="h-screen flex justify-center items-center">
            <h2 className="text-white text-3xl">This is the second layer</h2>
          </div>
        </ParallaxLayer>

        {/* Foreground layer */}
        <ParallaxLayer offset={2} speed={0.1}>
          <div className="h-screen flex justify-center items-center">
            <h3 className="text-gray-800 text-2xl">Enjoy the scrolling effect!</h3>
          </div>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}