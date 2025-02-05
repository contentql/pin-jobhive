import { formatCurrency } from '@contentql/core/client'
import { JobPost, JobRole, JobType, Media, SiteSetting } from '@payload-types'
import { payloadSlateToHtmlConfig, slateToHtml } from '@slate-serializers/html'
import { format } from 'date-fns'
import { Element } from 'domhandler'
import DOMPurify from 'isomorphic-dompurify'
import {
  BriefcaseBusiness,
  Calendar,
  Clock,
  GraduationCap,
  Hourglass,
  MapPin,
  SquareArrowOutUpRight,
  UserPen,
  Wallet,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import ApplyJob from '@/components/ApplyJob'

const JobDetails = ({
  job,
  siteData,
}: {
  job: JobPost
  siteData: SiteSetting
}) => {
  const jobPostedDate = format(
    new Date(job?.dates?.openingDate),
    'MMMM dd, yyyy',
  )
  const jobEndingDate = format(
    new Date(job?.dates?.closingDate!),
    'MMMM dd, yyyy',
  )

  const html = slateToHtml(job?.jobDetails?.description || [], {
    ...payloadSlateToHtmlConfig,
    markMap: {
      ...payloadSlateToHtmlConfig.markMap,
      mark: ['mark'],
      kbd: ['kbd'],
      iframe: ['iframe'],
      pre: ['pre'],
      strong: ['strong'],
    },
    markTransforms: {
      'custom-iframe': ({ node }) => {
        return new Element('iframe', {
          src: node.text,
        })
      },
    },
    elementTransforms: {
      ...payloadSlateToHtmlConfig.elementTransforms,
      upload: ({ node }) => {
        // for video returning video element
        if (node && node?.value) {
          const mimeType = node?.value?.mimeType ?? ''
          if (mimeType.includes('video')) {
            return new Element('video', {
              src: node?.value?.url,
              controls: 'true',
            })
          }
        }

        return payloadSlateToHtmlConfig.elementTransforms.upload({ node })
      },
      link: ({ node, children = [] }) => {
        const attrs: { [key: string]: string } = {}
        if (node.linkType) {
          attrs['data-link-type'] = node.linkType
        }
        if (node.newTab) {
          attrs.target = '_blank'
        }

        attrs['data-disable-nprogress'] = 'true'

        return new Element(
          'a',
          Object.assign(
            {
              href: node.url,
            },
            attrs,
          ),
          children,
        )
      },
    },
  })

  const purifiedHtml = DOMPurify.sanitize(html, {
    ADD_ATTR: ['target'], // Allow the "target" attribute
    ADD_TAGS: ['iframe'], // You can also add other tags if needed (optional)
  })

  const minCurrency = {
    amount: job?.jobDetails?.salaryRange?.min ?? 0,
    currencyCode: siteData?.general?.currency,
  }

  const maxCurrency = {
    amount: job?.jobDetails?.salaryRange?.max ?? 0,
    currencyCode: siteData?.general?.currency,
  }

  const minSalary = formatCurrency(minCurrency)
  const maxSalary = formatCurrency(maxCurrency)

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
              src={(job?.company?.logo as Media)?.url!}
            />

            {/* Job Details */}
            <div className='flex w-full flex-col gap-6 lg:flex-row lg:justify-between lg:gap-8'>
              {/* Left Section */}
              <div className='flex flex-col items-center lg:items-start'>
                {/* Job Title */}
                <div className='mb-3 flex items-center gap-2'>
                  <Link
                    href={`/job/${job?.jobDetails?.slug}`}
                    className='text-xl font-semibold hover:text-primary sm:text-2xl'>
                    {job?.jobDetails?.title}
                  </Link>
                  {job?.featured && (
                    <span className='text-green-500'>Featured</span>
                  )}
                </div>

                {/* Job Metadata */}
                <div className='flex flex-wrap gap-4 text-text/70'>
                  <div className='flex items-center gap-2'>
                    <BriefcaseBusiness size={16} />
                    {job?.jobDetails?.roles?.map((role, index) => (
                      <label key={index} className='truncate text-sm'>
                        {(role as JobRole)?.title}
                        {index < job?.jobDetails?.roles.length - 1 && ', '}
                      </label>
                    ))}
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin size={16} />
                    <span>{job?.jobDetails?.location}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock size={16} />
                    <span>{jobPostedDate}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Wallet size={16} />
                    <label className='truncate text-sm'>
                      {minSalary} - {maxSalary}
                    </label>
                  </div>
                </div>

                {/* Job Type */}
                <div className='mt-4'>
                  <div className='rounded-full bg-primary/10 px-4 py-1 text-sm text-primary'>
                    {(job?.jobDetails?.type as JobType)?.title}
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className='flex flex-col items-center gap-4 lg:items-end'>
                <div>
                  <span className='mr-1'>Application Ends:</span>
                  <span className='font-medium text-red-500'>
                    {jobEndingDate}
                  </span>
                </div>
                <ApplyJob formData={job?.application?.internalForm} />
                {/* <Button>Apply Now</Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto flex max-w-7xl gap-8 px-6 pb-32 pt-20 lg:px-8'>
        <div className='w-full'>
          <div
            dangerouslySetInnerHTML={{ __html: purifiedHtml }}
            className='prose dark:prose-invert'
          />
        </div>

        <div className='sticky top-[84px] ml-auto hidden w-1/2 flex-col gap-8 lg:flex'>
          <div className='  h-auto  rounded bg-foreground px-8 py-7'>
            <div>
              <div className='mb-4 text-lg font-semibold'>Job Overview</div>
              <div className='flex flex-col gap-6'>
                <div className='flex gap-6'>
                  <Calendar className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Date Posted</h1>
                    <h1 className='text-sm text-text/70'>{jobPostedDate}</h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <MapPin className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Location</h1>
                    <h1 className='text-sm text-text/70'>
                      {job?.jobDetails?.location}
                    </h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <Wallet className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Offered Salary</h1>
                    <h1 className='text-sm text-text/70'>
                      <label>
                        {minSalary} - {maxSalary}
                      </label>
                    </h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <Hourglass className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Expiration Date</h1>
                    <h1 className='text-sm text-text/70'>{jobEndingDate}</h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <UserPen className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Experience</h1>
                    <h1 className='text-sm text-text/70'>
                      {job?.requirements?.experience}
                    </h1>
                  </div>
                </div>
                <div className='flex gap-6'>
                  <GraduationCap className='text-primary' size={22} />
                  <div>
                    <h1 className='font-semibold'>Graduation</h1>
                    <div className='text-sm text-text/70'>
                      {job?.requirements?.qualifications?.map(
                        (qualification, index) => (
                          <span key={index} className='block'>
                            {qualification?.qualification}
                          </span>
                        ),
                      )}
                    </div>
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
                src={`https://maps.google.com/maps?q=${job?.jobDetails?.location}&t=m&z=14&output=embed&iwloc=near`}
                title='Hyderabad'
                aria-label='Hyderabad'
              />
            </div>
          </div>
          <div className='  h-auto rounded bg-foreground px-8 py-7'>
            <div className='mb-4 text-lg font-semibold'>Job Skills</div>
            <div className='flex flex-wrap gap-2'>
              {job?.requirements?.skills?.map((skill, index) => (
                <div
                  className='rounded bg-background px-4 py-2 text-sm'
                  key={index}>
                  {skill?.skill}
                </div>
              ))}
            </div>
          </div>
          <div className='  h-auto rounded bg-foreground px-8 py-7'>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-5'>
                <Image
                  alt={(job?.company?.logo as Media)?.alt || 'Company Logo'}
                  height={1000}
                  width={1000}
                  className='size-20'
                  src={(job?.company?.logo as Media)?.url!}
                />
                <div>
                  <h1 className='mb-2 font-semibold'>{job?.company?.name}</h1>
                  <Link
                    target='_blank'
                    href={job?.company?.website!}
                    className='flex text-sm text-text/70 hover:text-primary'>
                    <span>Visit site</span>
                    <span className='ml-2'>
                      <SquareArrowOutUpRight size={18} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-between'>
                  <h1 className='font-semibold'>Location:</h1>
                  <span className='text-text/70'>{job?.company?.location}</span>
                </div>
                <div className='flex justify-between'>
                  <h1 className='font-semibold'>Email:</h1>
                  <span className='text-text/70'>{job?.company?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
