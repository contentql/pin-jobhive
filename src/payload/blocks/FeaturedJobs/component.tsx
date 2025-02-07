import { Params } from '../types'
import { formatCurrency } from '@contentql/core/client'
import configPromise from '@payload-config'
import { FeaturedJobsType, JobRole, JobType, Media } from '@payload-types'
import { BriefcaseBusiness, MapPin, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

interface FeaturedProps extends FeaturedJobsType {
  params: Params
}

const FeaturedJobs: React.FC<FeaturedProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })
  const { docs: jobsData } = await payload.find({
    collection: 'jobPosts',
    limit: 1000,
  })

  const siteData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })

  const featuredJobs = jobsData.filter(job => job?.featured)

  return Boolean(featuredJobs.length) ? (
    <div className='mt-32 px-6 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight sm:text-5xl'>
          {block?.heading}
        </h2>
        <p className='mt-6 text-lg/8 text-muted-foreground'>
          {block?.description}
        </p>
      </div>
      <div className='grid grid-cols-1 gap-8 pt-12 lg:grid-cols-2'>
        {featuredJobs?.slice(0, 4)?.map(job => {
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
            <div key={job.id} className='rounded border border-border p-8'>
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
                    {job.featured && (
                      <label className='text-xs text-green-500'>Featured</label>
                    )}
                  </div>
                  <div className='grid grid-cols-1 space-y-1 text-muted-foreground md:grid-cols-3 md:space-x-6 md:space-y-0'>
                    <div className='flex'>
                      <BriefcaseBusiness size={17} className='mr-1' />
                      {job?.jobDetails?.roles?.map((role, index) => (
                        <label key={index} className='truncate text-sm'>
                          {(role as JobRole)?.title}
                          {index < job?.jobDetails?.roles.length - 1 && ', '}
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
                    {job?.jobDetails?.type && (
                      <div className='rounded-full bg-primary/10 px-4 py-1 text-sm text-primary'>
                        {(job?.jobDetails?.type as JobType)?.title}
                      </div>
                    )}
                    {job?.jobDetails?.remote && (
                      <div className='rounded-full bg-primary/10 px-5 py-1 text-sm text-primary'>
                        Remote
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='mt-12 flex items-center justify-center'>
        <Link
          href={'/jobs'}
          className='inline-flex h-10 items-center gap-1 rounded bg-primary px-4 text-sm hover:bg-primary/90'>
          {block?.buttonText}
        </Link>
      </div>
    </div>
  ) : null
}

export default FeaturedJobs
