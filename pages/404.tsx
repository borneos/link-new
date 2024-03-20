import React from 'react';
import HeadMain from '@/components/HeadMain';
import images from '@/constant/images';
import Image from 'next/image';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <HeadMain
       title="Error - Nusa Commerce | Presentation"
       description="Error - Nusa Commerce | Presentation"
       keyword="nusacommerce, ecommerce, umkm"
       ogTitle="Error - Nusa Commerce | Presentation"
       ogDescription="Error - Nusa Commerce | Presentation."
       ogImageUrl={images.OG_IMAGE}
       ogImageAlt="Error - Nusa Commerce | Presentation"
       ogImageType="image/png"
       ogImageHeight="561"
       ogImageWidth="561"
       ogUrl="localhost:3000"
      />
      <div className="max-w-md min-h-screen container mx-auto bg-white text-black flex flex-col justify-center items-center">
        <span className='font-medium text-2xl'>Page Not Found</span>
        <Player
          autoplay
          loop
          src="https://lottie.host/7fab37db-7ead-4892-be63-8108163715d8/NL6XfmJhFo.json"
          style={{ height: '350px', width: '400px' }}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
        <span>Back to <Link href={`/`}>Homepage</Link></span>
      </div>
    </>
  );
}
