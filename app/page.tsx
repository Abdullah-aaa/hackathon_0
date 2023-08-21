"use client";

import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import Gallery from './component/Gallery';

export default function Home() {
  return (
    <main className="">
     {/* <CldUploadButton uploadPreset="nuf53rpl" /> */}
     <Gallery/>
    </main>
  )
}
