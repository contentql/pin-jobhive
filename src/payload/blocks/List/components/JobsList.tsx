'use client'

import { JobPost, JobRole, JobType, Media, SalaryRange } from '@payload-types'
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

const JobsList = ({
  jobs,
  jobRoles,
  title,
  salaryRange,
}: {
  jobs: JobPost[]
  jobRoles: JobRole[]
  title: string
  salaryRange: SalaryRange[]
}) => {
  console.log('jobs...', jobs.at(0))

  const locations = jobs?.length
    ? jobs.map(job => job?.jobDetails?.location)
    : []

  const [jobPosts, setJobPosts] = useState(jobs)
  const [filters, setFilters] = useState<{
    title: string
    location: string
    category: string
  }>({
    title: '',
    location: '',
    category: '',
  })

  const handleChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const handleFilter = () => {
    console.log({ filters })
    const filteredJobs = jobs.filter(job => {
      return (
        (filters.title
          ? job?.jobDetails?.title
              ?.toLowerCase()
              .includes(filters.title.toLowerCase())
          : true) &&
        (filters.location
          ? job?.jobDetails?.location === filters.location
          : true) &&
        (filters.category
          ? job.jobDetails.roles.some(
              role => (role as JobRole)?.title === filters.category,
            )
          : true)
      )
    })
    setJobPosts(filteredJobs)
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
                  placeholder='Job Title'
                  onChange={e => handleChange('title', e.target.value)}
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
                      {locations?.map((location, index) => (
                        <SelectItem key={index} value={location}>
                          {location}
                        </SelectItem>
                      ))}
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
                      {jobRoles?.map((role, index) => (
                        <SelectItem key={index} value={role?.title}>
                          {role?.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Find Jobs Button */}
              <div className='w-full lg:w-auto'>
                <Button className='w-full lg:w-auto' onClick={handleFilter}>
                  Find Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl gap-8 px-6 pb-32 pt-20 lg:px-8'>
        {/* Job Filter Section */}
        <div className='sticky top-[84px] hidden h-auto w-1/2 rounded bg-foreground px-8 py-7 lg:flex'>
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
                      {jobRoles?.map((role, index) => (
                        <SelectItem key={index} value={role?.title}>
                          {role?.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className='mb-8'>
              <h1 className='mb-5 font-semibold'>Salary</h1>
              <div className='flex flex-col gap-4'>
                {salaryRange?.map((salary, index) => {
                  if (salary?.salaryType === 'range') {
                    return (
                      <div
                        key={index}
                        className='flex items-center gap-2 text-text/70'>
                        <Switch />
                        <div>
                          <span>${salary?.salaryMin}</span>
                          {' - '}
                          <span>${salary?.salaryMax}</span>
                        </div>
                      </div>
                    )
                  }

                  if (salary?.salaryType === 'greaterThan') {
                    return (
                      <div
                        key={index}
                        className='flex items-center gap-2 text-text/70'>
                        <Switch />
                        <div>
                          {'> '}
                          <span>${salary?.salaryMin}</span>
                        </div>
                      </div>
                    )
                  }

                  if (salary?.salaryType === 'lessThan') {
                    return (
                      <div
                        key={index}
                        className='flex items-center gap-2 text-text/70'>
                        <Switch />
                        <div>
                          {'< '}
                          <span>${salary?.salaryMax}</span>
                        </div>
                      </div>
                    )
                  }

                  return null // Return null if none of the conditions match
                })}
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
                  <label className='text-text/70'>2 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>3 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>4 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch />
                  <label className='text-text/70'>Above 5 Years</label>
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
              {jobPosts?.map((job, index) => (
                <div key={index} className='rounded border border-border p-8'>
                  <div className='flex gap-5'>
                    <Image
                      height={1000}
                      width={1000}
                      className='size-12 rounded'
                      alt=''
                      src={(job?.company?.logo as Media)?.url!}
                    />
                    <div>
                      <div className='mb-1 flex items-center gap-1'>
                        <Link
                          href={`/job/${job?.jobDetails?.slug}`}
                          className='font-semibold hover:text-primary'>
                          {job?.jobDetails?.title}
                        </Link>
                        {job?.featured && (
                          <label className='text-xs text-green-500'>
                            Featured
                          </label>
                        )}
                      </div>
                      <div className='grid grid-cols-1 space-y-1 text-text/70 md:grid-cols-3 md:space-x-6 md:space-y-0'>
                        <div className='flex'>
                          <BriefcaseBusiness size={17} className='mr-1' />
                          {job?.jobDetails?.roles?.map((role, index) => (
                            <label key={index} className='truncate text-sm'>
                              {(role as JobRole)?.title}
                              {index < job?.jobDetails?.roles.length - 1 &&
                                ', '}
                            </label>
                          ))}
                        </div>
                        <div className='flex'>
                          <MapPin size={17} className='mr-1' />
                          <label className='truncate text-sm'>
                            {job?.jobDetails?.location}
                          </label>
                        </div>
                        <div className='flex'>
                          <Wallet size={17} className='mr-1' />
                          <label className='truncate text-sm'>
                            ${job?.jobDetails?.salaryRange?.min}-$
                            {job?.jobDetails?.salaryRange?.max}
                          </label>
                        </div>
                      </div>
                      <div className='mt-3 flex gap-4'>
                        <div className='rounded-full bg-primary/10 px-5 py-1 text-sm text-primary'>
                          {(job?.jobDetails?.type as JobType)?.title}
                        </div>
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
