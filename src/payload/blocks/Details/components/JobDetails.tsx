import {
  BriefcaseBusiness,
  Calendar,
  Clock,
  GraduationCap,
  Hourglass,
  MapPin,
  UserPen,
  Wallet,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/common/Button'

const jobCard = {
  id: 1,
  title: 'Junior Graphic Designer (Web)',
  featured: true,
  categories: ['Design', 'Development'],
  location: 'New York',
  salary: '$150 - $180 / week',
  type: 'Full Time',
  image: '/images/image.png',
  postedOn: 'June 20, 2021',
  postEndsOn: 'May 18, 2026',
  experience: '4 years',
  graduation: 'Bachelor Degree',
}

const JobDetails = () => {
  return (
    <div>
      <div className='bg-foreground'>
        <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
          <div className='flex flex-col items-center gap-8 lg:flex-row lg:items-start'>
            {/* Job Image */}
            <Image
              height={1000}
              width={1000}
              className='size-24 rounded object-cover'
              alt=''
              src={jobCard.image}
            />

            {/* Job Details */}
            <div className='flex w-full flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8'>
              {/* Left Section */}
              <div className='flex flex-col items-center lg:items-start'>
                {/* Job Title */}
                <div className='mb-3 flex items-center gap-2'>
                  <Link
                    href='/'
                    className='text-xl font-semibold hover:text-primary sm:text-2xl'>
                    {jobCard.title}
                  </Link>
                  {jobCard.featured && (
                    <span className='text-green-500'>Featured</span>
                  )}
                </div>

                {/* Job Metadata */}
                <div className='flex flex-wrap gap-4 text-text/70'>
                  <div className='flex items-center gap-2'>
                    <BriefcaseBusiness size={16} />
                    <span>{jobCard.categories.join(', ')}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin size={16} />
                    <span>{jobCard.location}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock size={16} />
                    <span>{jobCard.postedOn}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Wallet size={16} />
                    <span>{jobCard.salary}</span>
                  </div>
                </div>

                {/* Job Type */}
                <div className='mt-4'>
                  <button className='rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-600'>
                    {jobCard.type}
                  </button>
                </div>
              </div>

              {/* Right Section */}
              <div className='flex flex-col items-center gap-4 lg:items-end'>
                <div>
                  <span className='mr-1'>Application Ends:</span>
                  <span className='font-medium text-red-500'>
                    {jobCard.postEndsOn}
                  </span>
                </div>
                <Button>Apply Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl gap-8 px-6 pb-32 pt-20 lg:px-8'>
        <div>Job Description</div>
        <div className='sticky top-[84px] ml-auto hidden w-1/3 flex-col gap-8 lg:flex'>
          <div className='  h-auto  rounded bg-foreground px-8 py-7'>
            <div>
              <div className='mb-4 text-lg font-semibold'>Job Overview</div>
              <div className='flex flex-col gap-6'>
                <div className='flex gap-6'>
                  <Calendar className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Date Posted</h1>
                    <h1 className='text-sm text-text/70'>{jobCard.postedOn}</h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <MapPin className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Location</h1>
                    <h1 className='text-sm text-text/70'>{jobCard.location}</h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <Wallet className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Offered Salary</h1>
                    <h1 className='text-sm text-text/70'>{jobCard.salary}</h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <Hourglass className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Expiration Date</h1>
                    <h1 className='text-sm text-text/70'>
                      {jobCard.postEndsOn}
                    </h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <UserPen className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Experience</h1>
                    <h1 className='text-sm text-text/70'>
                      {jobCard.experience}
                    </h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <GraduationCap className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Graduation</h1>
                    <h1 className='text-sm text-text/70'>
                      {jobCard.graduation}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='  h-auto rounded bg-foreground px-8 py-7'>
            <div className='mb-4 text-lg font-semibold'>Job Location</div>
            <div>
              <iframe
                className='h-64 w-full rounded'
                loading='lazy'
                src={`https://maps.google.com/maps?q=${'hyderabad'}&t=m&z=14&output=embed&iwloc=near`}
                title='Hyderabad'
                aria-label='Hyderabad'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
