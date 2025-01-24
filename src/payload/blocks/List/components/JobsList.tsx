'use client'

import { BriefcaseBusiness, MapPin, Search, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Button from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/common/Select'
import { Switch } from '@/components/common/Switch'

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
  {
    id: 5,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/image.png',
  },
  {
    id: 6,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/image.png',
  },
]
const JobsList = () => {
  const [rangeValue, setRangeValue] = useState(1000) // Initial value for the slider

  const handleRangeChange = (e: any) => {
    setRangeValue(e.target.value) // Update state when the slider moves
  }
  return (
    <div>
      {/* Hero Section Job Search */}
      <div className='bg-foreground'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='rounded bg-background p-5'>
            <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
              <div className='flex w-full items-center gap-2 border-b py-4 md:border-b-0 md:border-r'>
                <Search size={21} />
                <Input
                  className='mr-4 border-none'
                  placeholder='Job Title, Keywords'
                />
              </div>
              <div className='flex w-full items-center gap-2 border-b py-4 md:border-b-0 md:border-r'>
                <MapPin size={21} />
                <Select>
                  <SelectTrigger className='mr-4 w-full border-none'>
                    <SelectValue placeholder='City or PostCode' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Cities</SelectLabel>
                      <SelectItem value='apple'>London</SelectItem>
                      <SelectItem value='banana'>Los Angels</SelectItem>
                      <SelectItem value='blueberry'>Miami</SelectItem>
                      <SelectItem value='grapes'>Nevada</SelectItem>
                      <SelectItem value='pineapple'>Florida</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className='flex w-full items-center gap-2'>
                <BriefcaseBusiness size={21} />
                <Select>
                  <SelectTrigger className='mr-4 w-full border-none'>
                    <SelectValue placeholder='All Categories' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value='apple'>Development</SelectItem>
                      <SelectItem value='banana'>Design</SelectItem>
                      <SelectItem value='blueberry'>Customer</SelectItem>
                      <SelectItem value='grapes'>Accounting</SelectItem>
                      <SelectItem value='pineapple'>Automotive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button>Find Jobs</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl gap-8 px-6 pb-32 pt-20 lg:px-8'>
        {/* Job Filter Section */}
        <div className='sticky top-[84px] hidden h-screen w-1/2 rounded bg-foreground px-8 py-7 md:flex'>
          <div className='w-full'>
            <div className='mb-8'>
              <h1 className='mb-5 font-semibold'>Job Type</h1>
              <div className=' w-full'>
                <Select>
                  <SelectTrigger className='w-full border-none'>
                    <SelectValue placeholder='All Categories' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value='apple'>Development</SelectItem>
                      <SelectItem value='banana'>Design</SelectItem>
                      <SelectItem value='blueberry'>Customer</SelectItem>
                      <SelectItem value='grapes'>Accounting</SelectItem>
                      <SelectItem value='pineapple'>Automotive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='mb-8'>
              <h1 className='mb-5 font-semibold'>Salary</h1>
              <div className='relative'>
                <label htmlFor='labels-range-input' className='sr-only'>
                  Labels range
                </label>
                <input
                  id='labels-range-input'
                  type='range'
                  value={rangeValue} // Bind state value to the input
                  min='100'
                  max='1500'
                  onChange={handleRangeChange} // Update state when the slider is moved
                  className='h-2 w-full cursor-pointer appearance-none rounded-lg bg-primary'
                />
                <span className='absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400'>
                  Min ($0)
                </span>
                <span className='absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400'>
                  Max (${rangeValue})
                </span>
              </div>
            </div>

            <div className='mb-8'>
              <h1 className='mb-5 font-semibold'>Experience Level</h1>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>Fresher</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>1 Year</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>2 Year</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>3 Year</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Job List */}
        <div className='w-full'>
          <div className='mb-5'>
            <h1 className='mb-4 font-semibold'>Your Selected</h1>
            <div className='flex items-center justify-between rounded bg-foreground p-3'>
              <div className='flex gap-2'>
                <div className='flex items-center rounded bg-background px-4 py-1'>
                  <label className='mr-1 text-red-500'>x</label>
                  <label>$1000</label>
                </div>
                <div className='flex items-center rounded bg-background px-4 py-1'>
                  <label className='mr-1 text-red-500'>x</label>
                  <label>Development</label>
                </div>
              </div>
              <h1 className='text-red-500'>Clear All</h1>
            </div>
          </div>

          <div>
            <div className='mb-8 flex w-full items-center justify-between'>
              <h1>Showing 1 – 10 of 18 results</h1>
              <div>
                <Select>
                  <SelectTrigger className=' border-none'>
                    <SelectValue placeholder='All Categories' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value='apple'>Development</SelectItem>
                      <SelectItem value='banana'>Design</SelectItem>
                      <SelectItem value='blueberry'>Customer</SelectItem>
                      <SelectItem value='grapes'>Accounting</SelectItem>
                      <SelectItem value='pineapple'>Automotive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
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
                      <div className='mb-1 flex items-center gap-1'>
                        <Link
                          href={'/'}
                          className='font-semibold hover:text-primary'>
                          {job.title}
                        </Link>
                        {job.featured && (
                          <label className='text-xs text-green-500'>
                            Featured
                          </label>
                        )}
                      </div>
                      <div className='flex gap-6 text-text/70'>
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
                          <label className='truncate text-sm'>
                            {job.location}
                          </label>
                        </div>
                        <div className='flex'>
                          <Wallet size={17} className='mr-1' />
                          <label className='truncate text-sm'>
                            {job.salary}
                          </label>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsList
