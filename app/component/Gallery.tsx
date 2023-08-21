import { Button } from '@/components/ui/button'
import React from 'react'
import { CldUploadButton } from 'next-cloudinary';


export default function Gallery() {
  return (
    <div className='mt-3 flex justify-between'>
    <div className='text-3xl font-bold ml-3'> Your Gallery</div>
    <Button className='mr-9 mt-3'><CldUploadButton uploadPreset="nuf53rpl" /> </Button>
    

    
    
    </div>
  )
}
