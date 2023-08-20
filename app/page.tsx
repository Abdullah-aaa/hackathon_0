"use client";

import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton uploadPreset="nuf53rpl" />
    </main>
  )
}
