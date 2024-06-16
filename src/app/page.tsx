"use client";
import { useState } from 'react';

import Image from 'next/image'


export default function Home() {
  const [imageID, setImageID] = useState('pzmuqriidvtvgmjudp6w');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      
      {/* {imageID &&
        <CldImage
        width="300"
        height="300"
        src={imageID}
        sizes="100vw"
        alt="Description of my image"
        />
      } */}
    </main>
  )
}
