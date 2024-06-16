"use client";

import { CldImage } from 'next-cloudinary';
import { OvalLoveTwo } from '@icon-park/react'

export default function CImage(props: any) {
  return (
    <div className='relative'>
      <CldImage
        width="300"
        height="300"
        sizes="100vw"
        alt="Description of my image"
        {...props}
      />
      <OvalLoveTwo className='absolute top-2 right-2' fill="#FFFFFF"  />
    </div>

  )
}