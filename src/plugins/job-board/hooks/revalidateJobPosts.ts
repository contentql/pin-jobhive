import { JobPost } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateJobPostsAfterChange: CollectionAfterChangeHook<
  JobPost
> = async ({ doc }) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobPosts')
    revalidateTag(`details-jobPost-${doc.jobDetails.slug}`)
    console.log(`list-jobPosts at ${new Date().getTime()}`)
  }
}

export const revalidateJobPostsAfterDelete: CollectionAfterDeleteHook<
  JobPost
> = async ({ doc }) => {
  revalidateTag('list-jobPosts')
  revalidateTag(`details-jobPost-${doc.jobDetails.slug}`)
  console.log(`revalidated afterDelete jobPosts at ${new Date().getTime()}`)
}
