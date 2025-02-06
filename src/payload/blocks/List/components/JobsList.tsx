'use client'

import { formatCurrency } from '@contentql/core/client'
import {
  JobPost,
  JobRole,
  JobType,
  Media,
  SalaryRange,
  SiteSetting,
} from '@payload-types'
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
  siteData,
}: {
  jobs: JobPost[]
  jobRoles: JobRole[]
  title: string
  salaryRange: SalaryRange[]
  siteData: SiteSetting
}) => {
  console.log({ jobs })
  const locations = jobs?.length
    ? Array.from(new Set(jobs.flatMap(job => job?.jobDetails?.location ?? [])))
    : []

  const [filters, setFilters] = useState<{
    title: string
    location: string
    category: string
    selectedSalaryRange: {
      min: number | null
      max: number | null
    }
    experience: number | null
  }>({
    title: '',
    location: '',
    category: '',
    selectedSalaryRange: { min: null, max: null },
    experience: null,
  })

  const handleChange = (field: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }))
  }

  const filteredJobs = jobs.filter(job => {
    const { title, location, category, selectedSalaryRange, experience } =
      filters

    // Title filter
    const matchesTitle = Boolean(title)
      ? job?.jobDetails?.title?.toLowerCase().includes(title.toLowerCase())
      : true

    // Location filter
    const matchesLocation = location
      ? job?.jobDetails?.location.includes(location)
      : true

    // Category filter
    const matchesCategory = category
      ? job.jobDetails.roles.some(role => (role as JobRole)?.title === category)
      : true

    // Salary filter
    const jobSalaryRange = job?.jobDetails?.salary
    const jobSalaryMin = jobSalaryRange?.min ?? null
    const jobSalaryMax = jobSalaryRange?.max ?? null
    const matchesSalary =
      selectedSalaryRange.min !== null || selectedSalaryRange.max !== null
        ? (selectedSalaryRange.min === null ||
            (jobSalaryMin !== null &&
              jobSalaryMin >= selectedSalaryRange.min)) &&
          (selectedSalaryRange.max === null ||
            (jobSalaryMax !== null && jobSalaryMax <= selectedSalaryRange.max))
        : true

    // Experience filter
    const matchesExperience =
      experience !== null && experience !== undefined
        ? experience === 0
          ? job?.requirements?.experience === 0
          : experience === 5
            ? job?.requirements?.experience! >= 5
            : experience === job?.requirements?.experience
        : true

    return (
      matchesTitle &&
      matchesLocation &&
      matchesCategory &&
      matchesSalary &&
      matchesExperience
    )
  })

  const handleExperienceChange = (experienceLevel: number | null) => {
    setFilters(prev => ({
      ...prev,
      experience: prev.experience === experienceLevel ? null : experienceLevel,
    }))
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
                  value={filters.title}
                  className='w-full border-none'
                  placeholder='Job Title'
                  onChange={e => handleChange('title', e.target.value)}
                />
              </div>

              {/* Location Dropdown */}
              <div className='flex w-full items-center gap-2 border-b py-4 lg:border-b-0 lg:border-r lg:pr-4'>
                <MapPin size={21} />
                <Select
                  value={filters.location}
                  onValueChange={value => handleChange('location', value)}>
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
                <Select
                  value={filters.category}
                  onValueChange={value => handleChange('category', value)}>
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
                <Button className='w-full lg:w-auto'>Find Jobs</Button>
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
                <Select
                  value={filters.category}
                  onValueChange={value => handleChange('category', value)}>
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
                  const minCurrency = {
                    amount: salary?.salaryMin ?? 0,
                    currencyCode: siteData?.general?.currency,
                  }

                  const maxCurrency = {
                    amount: salary?.salaryMax ?? 0,
                    currencyCode: siteData?.general?.currency,
                  }

                  const minSalary = formatCurrency(minCurrency)
                  const maxSalary = formatCurrency(maxCurrency)

                  const isSelected =
                    (salary?.salaryType === 'range' &&
                      filters.selectedSalaryRange.min === salary.salaryMin &&
                      filters.selectedSalaryRange.max === salary.salaryMax) ||
                    (salary?.salaryType === 'greaterThan' &&
                      filters.selectedSalaryRange.min === salary.salaryMin &&
                      filters.selectedSalaryRange.max === null) ||
                    (salary?.salaryType === 'lessThan' &&
                      filters.selectedSalaryRange.min === null &&
                      filters.selectedSalaryRange.max === salary.salaryMax)

                  const handleSalarySelection = () => {
                    if (isSelected) {
                      // Deselect salary range
                      setFilters(prev => ({
                        ...prev,
                        selectedSalaryRange: { min: null, max: null },
                      }))
                    } else {
                      // Select new salary range
                      setFilters(prev => ({
                        ...prev,
                        selectedSalaryRange: {
                          min:
                            salary.salaryType === 'lessThan'
                              ? null
                              : (salary.salaryMin ?? null),
                          max:
                            salary.salaryType === 'greaterThan'
                              ? null
                              : (salary.salaryMax ?? null),
                        },
                      }))
                    }
                  }

                  return (
                    <div
                      key={index}
                      className='flex items-center gap-2 text-muted-foreground'>
                      <Switch
                        checked={isSelected}
                        onCheckedChange={handleSalarySelection}
                      />
                      <div>
                        {salary?.salaryType === 'range' && (
                          <>
                            <span>{minSalary}</span> - <span>{maxSalary}</span>
                          </>
                        )}
                        {salary?.salaryType === 'greaterThan' && (
                          <>
                            {'> '}
                            <span>{minSalary}</span>
                          </>
                        )}
                        {salary?.salaryType === 'lessThan' && (
                          <>
                            {'< '}
                            <span>{maxSalary}</span>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='mb-8'>
              <h1 className='mb-5 font-semibold'>Experience Level</h1>
              <div className='flex flex-col gap-4'>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 0} // Fresher is selected when experience is null
                    onCheckedChange={() => handleExperienceChange(0)}
                  />
                  <label className='text-muted-foreground'>Fresher</label>
                </div>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 1} // 1 Year experience selected
                    onCheckedChange={() => handleExperienceChange(1)}
                  />
                  <label className='text-muted-foreground'>1 Year</label>
                </div>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 2} // 2 Years experience selected
                    onCheckedChange={() => handleExperienceChange(2)}
                  />
                  <label className='text-muted-foreground'>2 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 3} // 3 Years experience selected
                    onCheckedChange={() => handleExperienceChange(3)}
                  />
                  <label className='text-muted-foreground'>3 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 4} // 4 Years experience selected
                    onCheckedChange={() => handleExperienceChange(4)}
                  />
                  <label className='text-muted-foreground'>4 Years</label>
                </div>
                <div className='flex gap-3'>
                  <Switch
                    checked={filters.experience === 5} // Above 5 Years experience selected
                    onCheckedChange={() => handleExperienceChange(5)}
                  />
                  <label className='text-muted-foreground'>Above 5 Years</label>
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
                {filters.title && (
                  <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                    <label
                      className='mr-1 cursor-pointer text-red-500'
                      onClick={() => {
                        setFilters(prev => ({ ...prev, title: '' }))
                      }}>
                      x
                    </label>
                    <label>{filters.title}</label>
                  </div>
                )}
                {filters.location && (
                  <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                    <label
                      className='mr-1 cursor-pointer text-red-500'
                      onClick={() => {
                        setFilters(prev => ({ ...prev, location: '' }))
                      }}>
                      x
                    </label>
                    <label>{filters.location}</label>
                  </div>
                )}
                {filters.category && (
                  <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                    <label
                      className='mr-1 cursor-pointer text-red-500'
                      onClick={() => {
                        setFilters(prev => ({ ...prev, category: '' }))
                      }}>
                      x
                    </label>
                    <label>{filters.category}</label>
                  </div>
                )}
                {filters.selectedSalaryRange.min && (
                  <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                    <label
                      className='mr-1 cursor-pointer text-red-500'
                      onClick={() => {
                        setFilters(prev => ({
                          ...prev,
                          selectedSalaryRange: { min: null, max: null },
                        }))
                      }}>
                      x
                    </label>
                    <label>
                      ${filters.selectedSalaryRange.min} - $
                      {filters.selectedSalaryRange.max}
                    </label>
                  </div>
                )}
                {filters.experience !== null && (
                  <div className='flex items-center rounded bg-background px-4 py-1 text-sm'>
                    <label
                      className='mr-1 cursor-pointer text-red-500'
                      onClick={() => {
                        setFilters(prev => ({ ...prev, experience: null }))
                      }}>
                      x
                    </label>
                    <label>{filters.experience} Years</label>
                  </div>
                )}
              </div>

              {/* Clear All */}
              <button
                onClick={() => {
                  setFilters({
                    title: '',
                    location: '',
                    category: '',
                    selectedSalaryRange: { min: null, max: null },
                    experience: null,
                  })
                }}
                className='cursor-pointer text-sm font-medium text-red-500 hover:underline sm:text-base'>
                Clear All
              </button>
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
              {filteredJobs?.map((job, index) => {
                const minCurrency = {
                  amount: job?.jobDetails?.salary?.min ?? 0,
                  currencyCode: siteData?.general?.currency,
                }

                const maxCurrency = {
                  amount: job?.jobDetails?.salary?.max ?? 0,
                  currencyCode: siteData?.general?.currency,
                }

                const fixedSalaryCurrency = {
                  amount: job?.jobDetails?.salary?.amount ?? 0,
                  currencyCode: siteData?.general?.currency,
                }

                const minSalary = formatCurrency(minCurrency)
                const maxSalary = formatCurrency(maxCurrency)
                const fixedSalary = formatCurrency(fixedSalaryCurrency)

                return (
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
                        <div className='grid grid-cols-1 space-y-1 text-muted-foreground md:grid-cols-3 md:space-x-6 md:space-y-0'>
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
                              {job?.jobDetails?.salary?.type === 'fixed' &&
                                `${fixedSalary}`}
                              {job?.jobDetails?.salary?.type === 'range' &&
                                `${minSalary} - ${maxSalary}`}
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobsList
