"use client";
import { CldUploadButton } from 'next-cloudinary';
import { Button } from "@/components/ui/button"
import { Upload } from '@icon-park/react';

export default function GalleryPage() {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">图库</h1>
        <Button asChild>
          <CldUploadButton uploadPreset="PhotoHub">
            <Upload theme="outline" size="18" fill="#000000" strokeWidth={2} strokeLinecap="butt"/>
            <span className='pl-2'>上传图片</span>
          </CldUploadButton>
        </Button>

        
      </div>

    </section>)
}