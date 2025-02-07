import { JobRole } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateJobRolesAfterChange: CollectionAfterChangeHook<
  JobRole
> = async ({ doc }) => {
  if (doc._status === 'published') {
    revalidateTag('list-jobRoles')
    console.log(`list-jobRoles at ${new Date().getTime()}`)
  }
}

export const revalidateJobRolesAfterDelete: CollectionAfterDeleteHook<
  JobRole
> = async ({}) => {
  revalidateTag('list-jobRoles')
  console.log(`revalidated afterDelete jobRoles at ${new Date().getTime()}`)
}
