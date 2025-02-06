import { JobPost } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateJobPosts: CollectionAfterChangeHook<JobPost> = async ({
  doc,
}) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobPosts')
    revalidateTag(`details-jobPost-${doc.jobDetails.slug}`)
    console.log(`list-jobPosts at ${new Date().getTime()}`)
  }
}
