import { JobType } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateJobTypesAfterChange: CollectionAfterChangeHook<
  JobType
> = async ({ doc }) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobTypes')
    console.log(`list-jobTypes at ${new Date().getTime()}`)
  }
}

export const revalidateJobTypesAfterDelete: CollectionAfterDeleteHook<
  JobType
> = async ({}) => {
  revalidateTag('list-jobTypes')
  console.log(`revalidated afterDelete jobTypes at ${new Date().getTime()}`)
}
