import { Params } from '../types'
import { FeaturedJobsType } from '@payload-types'
import { BriefcaseBusiness, MapPin, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import Button from '@/components/common/Button'

const jobCards = [
  {
    id: 1,
    title: 'Junior Graphic Designer (Web)',
    featured: true,
    categories: ['Design', 'Development'],
    location: 'New York',
    salary: '$150 - $180 / week',
    type: 'Full Time',
    image: '/images/image.png',
  },
  {
    id: 2,
    title: 'Senior Graphic Designer',
    featured: false,
    categories: ['Design'],
    location: 'San Francisco',
    salary: '$200 - $250 / week',
    type: 'Part Time',
    image: '/images/image.png',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    featured: true,
    categories: ['Design', 'User Experience'],
    location: 'Los Angeles',
    salary: '$180 - $220 / week',
    type: 'Contract',
    image: '/images/image.png',
  },
  {
    id: 4,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/image.png',
  },
]

interface FeaturedProps extends FeaturedJobsType {
  params: Params
}

const FeaturedJobs: React.FC<FeaturedProps> = ({ params, ...block }) => {
  return (
    <div className='mt-32 px-6 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight sm:text-5xl'>
          {block?.heading}
        </h2>
        <p className='mt-6 text-lg/8 text-text/70'>{block?.description}</p>
      </div>
      <div className='grid grid-cols-1 gap-8 pt-12 lg:grid-cols-2'>
        {jobCards.map(job => (
          <div key={job.id} className='rounded border border-border p-8'>
            <div className='flex gap-5'>
              <Image
                height={1000}
                width={1000}
                className='size-12 rounded'
                alt=''
                src={job.image}
              />
              <div>
                <div className='mb-1 flex gap-1'>
                  <h1 className='font-semibold'>{job.title}</h1>
                  {job.featured && (
                    <label className='text-xs text-green-500'>Featured</label>
                  )}
                </div>
                <div className='grid grid-cols-1 space-y-1 text-text/70 md:grid-cols-3 md:space-x-6 md:space-y-0'>
                  <div className='flex'>
                    <BriefcaseBusiness size={17} className='mr-1' />
                    {job.categories.map((category, index) => (
                      <label key={index} className='truncate text-sm'>
                        {category}
                        {index < job.categories.length - 1 && ', '}
                      </label>
                    ))}
                  </div>
                  <div className='flex'>
                    <MapPin size={17} className='mr-1' />
                    <label className='truncate text-sm'>{job.location}</label>
                  </div>
                  <div className='flex'>
                    <Wallet size={17} className='mr-1' />
                    <label className='truncate text-sm'>{job.salary}</label>
                  </div>
                </div>
                <div className='mt-3 flex gap-4'>
                  <button className='rounded-full bg-blue-100 px-5 py-1 text-sm text-blue-600'>
                    {job.type}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12 flex items-center justify-center'>
        <Button>{block?.buttonText}</Button>
      </div>
    </div>
  )
}

export default FeaturedJobs
