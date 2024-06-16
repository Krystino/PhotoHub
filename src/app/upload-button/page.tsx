"use client";
import { CldUploadButton } from 'next-cloudinary';
import { Button } from "@/components/ui/button"
import { Upload } from '@icon-park/react';
import { useRouter } from 'next/navigation';

export default function UploadButton() {
  const router = useRouter()
  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset="PhotoHub"
        onSuccess={()=>{
          router.refresh()
        }
      }>
        <Upload theme="outline" size="18" fill="#000000" strokeWidth={2} strokeLinecap="butt"/>
        <span className='pl-2'>上传图片</span>
      </CldUploadButton>
    </Button>
  )
}