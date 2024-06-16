"use client";

import { CldImage } from 'next-cloudinary';


export default function CImage(props: any) {
  return (
    <CldImage
      width="300"
      height="300"
      sizes="100vw"
      alt="Description of my image"
      {...props}
    />
  )
}