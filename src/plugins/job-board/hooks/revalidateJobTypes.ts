import { JobType } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateJobTypes: CollectionAfterChangeHook<JobType> = async ({
  doc,
}) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobTypes')
    console.log(`list-jobTypes at ${new Date().getTime()}`)
  }
}
