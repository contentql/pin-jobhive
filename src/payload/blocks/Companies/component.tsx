import { Params } from '../types'
import { CompaniesType, Media } from '@payload-types'
import Image from 'next/image'
import React from 'react'

interface CompaniesProps extends CompaniesType {
  params: Params
}
const Companies: React.FC<CompaniesProps> = ({ params, ...block }) => {
  return (
    <div className='relative isolate -z-10 mt-32 sm:mt-48'>
      <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
        <svg
          aria-hidden='true'
          className='h-[40rem] w-[80rem] flex-none stroke-border'>
          <defs>
            <pattern
              x='50%'
              y='50%'
              id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
              width={200}
              height={200}
              patternUnits='userSpaceOnUse'
              patternTransform='translate(-100 0)'>
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg
            x='50%'
            y='50%'
            className='overflow-visible fill-border dark:fill-border/50'>
            <path
              d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg/8 font-semibold'>
          {block?.heading}
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {block?.companyLogos?.map((logo, index) => (
            <Image
              key={index}
              alt={(logo?.companyLogo as Media)?.alt || 'Company Logo'}
              src={(logo?.companyLogo as Media)?.url!}
              width={1000}
              height={1000}
              className='col-span-2 max-h-12 w-full object-contain dark:invert lg:col-span-1'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
