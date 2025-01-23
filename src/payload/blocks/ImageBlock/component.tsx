import { Params } from '../types'
import { ImageBlockType, Media } from '@payload-types'
import Image from 'next/image'
import React from 'react'

interface ImageBlockProps extends ImageBlockType {
  params: Params
}
const ImageBlock: React.FC<ImageBlockProps> = ({ params, ...block }) => {
  return (
    <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <Image
        height={1000}
        width={1000}
        alt={(block?.image as Media)?.alt || 'Image'}
        src={(block?.image as Media)?.url!}
        className='aspect-[5/2] w-full object-cover xl:rounded'
      />
    </div>
  )
}

export default ImageBlock
