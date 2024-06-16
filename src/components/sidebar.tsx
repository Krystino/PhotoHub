"use client";

import { Button } from "@/components/ui/button"
import {Pic, PictureAlbum, OvalLoveTwo} from '@icon-park/react'

export function Sidebar() {
  return (
    <div className="pb-12 w-1/5">
    <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            管理
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start gap-3">
              <Pic theme="outline" size="24" fill="#FFFFFF" strokeWidth={2} strokeLinecap="butt"/>
              画廊
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <PictureAlbum theme="outline" size="24" fill="#FFFFFF" strokeWidth={2} strokeLinecap="butt"/>
              相册
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <OvalLoveTwo theme="outline" size="24" fill="#FFFFFF" strokeWidth={2} strokeLinecap="butt"/>
              最爱
            </Button>
          </div>
        </div>
      </div>
    </div>

  )
}