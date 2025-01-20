import { Params } from '../types'
import { Media, TeamType } from '@payload-types'
import Image from 'next/image'
import React from 'react'

interface TeamProps extends TeamType {
  params: Params
}
const Team: React.FC<TeamProps> = ({ params, ...block }) => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          {block?.heading}
        </h2>
        <p className='mt-6 text-lg/8 text-gray-600'>{block?.description}</p>
      </div>
      <ul
        role='list'
        className='mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6'>
        {block?.team?.map((person, index) => (
          <li key={index}>
            <Image
              height={1000}
              width={1000}
              alt={(person?.image as Media)?.url || 'Team Member'}
              src={(person?.image as Media)?.url!}
              className='mx-auto size-24 rounded-full'
            />
            <h3 className='mt-6 text-base/7 font-semibold tracking-tight text-gray-900'>
              {person?.name}
            </h3>
            <p className='text-sm/6 text-gray-600'>{person?.designation}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
