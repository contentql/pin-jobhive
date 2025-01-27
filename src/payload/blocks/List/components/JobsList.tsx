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
    image: '/images/jobs/job1.png',
  },
  {
    id: 2,
    title: 'Senior Graphic Designer',
    featured: false,
    categories: ['Design'],
    location: 'San Francisco',
    salary: '$200 - $250 / week',
    type: 'Part Time',
    image: '/images/jobs/job2.png',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    featured: true,
    categories: ['Design', 'User Experience'],
    location: 'Los Angeles',
    salary: '$180 - $220 / week',
    type: 'Contract',
    image: '/images/jobs/job3.png',
  },
  {
    id: 4,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/jobs/job4.png',
  },
  {
    id: 5,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/jobs/job5.png',
  },
  {
    id: 6,
    title: 'Web Developer',
    featured: false,
    categories: ['Development', 'Web'],
    location: 'Remote',
    salary: '$170 - $210 / week',
    type: 'Full Time',
    image: '/images/jobs/job6.png',
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
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 lg:px-8 lg:pt-32'>
          <div className='rounded bg-background p-5'>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-center'>
              {/* Search Input */}
              <div className='flex w-full items-center gap-2 border-b py-4 lg:border-b-0 lg:border-r lg:pr-4'>
                <Search size={21} />
                <Input
                  className='w-full border-none'
                  placeholder='Job Title, Keywords'
                />
              </div>

              {/* Location Dropdown */}
              <div className='flex w-full items-center gap-2 border-b py-4 lg:border-b-0 lg:border-r lg:pr-4'>
                <MapPin size={21} />
                <Select>
                  <SelectTrigger className='w-full border-none'>
                    <SelectValue placeholder='City or PostCode' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Cities</SelectLabel>
                      <SelectItem value='london'>London</SelectItem>
                      <SelectItem value='losangeles'>Los Angeles</SelectItem>
                      <SelectItem value='miami'>Miami</SelectItem>
                      <SelectItem value='nevada'>Nevada</SelectItem>
                      <SelectItem value='florida'>Florida</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Categories Dropdown */}
              <div className='flex w-full items-center gap-2 py-4 lg:pr-4'>
                <BriefcaseBusiness size={21} />
                <Select>
                  <SelectTrigger className='w-full border-none'>
                    <SelectValue placeholder='All Categories' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Categories</SelectLabel>
                      <SelectItem value='development'>Development</SelectItem>
                      <SelectItem value='design'>Design</SelectItem>
                      <SelectItem value='customer'>Customer Support</SelectItem>
                      <SelectItem value='accounting'>Accounting</SelectItem>
                      <SelectItem value='automotive'>Automotive</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Find Jobs Button */}
              <div className='w-full lg:w-auto'>
                <Button className='w-full lg:w-auto'>Find Jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl gap-8 px-6 pb-32 pt-20 lg:px-8'>
        {/* Job Filter Section */}
        <div className='sticky top-[84px] hidden h-screen w-1/2 rounded bg-foreground px-8 py-7 lg:flex'>
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
                <span className='absolute -bottom-6 start-0 text-sm text-text/70'>
                  Min ($0)
                </span>
                <span className='absolute -bottom-6 end-0 text-sm text-text/70'>
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
            <h1 className='mb-4 text-lg font-semibold'>Your Selected</h1>
            <div className='flex flex-col gap-4 rounded bg-foreground p-3 sm:flex-row sm:items-center sm:justify-between'>
              {/* Selected Items */}
              <div className='flex flex-wrap gap-2'>
                <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                  <label className='mr-1 cursor-pointer text-red-500'>x</label>
                  <label>$1000</label>
                </div>
                <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                  <label className='mr-1 cursor-pointer text-red-500'>x</label>
                  <label>Development</label>
                </div>
              </div>

              {/* Clear All */}
              <h1 className='cursor-pointer text-sm font-medium text-red-500 hover:underline sm:text-base'>
                Clear All
              </h1>
            </div>
          </div>

          <div>
            <div className='mb-8 flex w-full items-center justify-between'>
              <h1>Showing 1 – 10 of 18 results</h1>
              <div>
                <Select>
                  <SelectTrigger className=' border-none'>
                    <SelectValue placeholder='Sort by' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sort</SelectLabel>
                      <SelectItem value='apple'>Newest</SelectItem>
                      <SelectItem value='banana'>Oldest</SelectItem>
                      <SelectItem value='blueberry'>Random</SelectItem>
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
                          href={`/job/${job.title}`}
                          className='font-semibold hover:text-primary'>
                          {job.title}
                        </Link>
                        {job.featured && (
                          <label className='text-xs text-green-500'>
                            Featured
                          </label>
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
                        <button className='rounded-full bg-primary/10 px-5 py-1 text-sm text-primary'>
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
