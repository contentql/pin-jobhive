import { JobRole } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateJobRoles: CollectionAfterChangeHook<JobRole> = async ({
  doc,
}) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobRoles')
    console.log(`list-jobRoles at ${new Date().getTime()}`)
  }
}
