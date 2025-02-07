import { SalaryRange } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
} from 'payload'

export const revalidateSalaryRangeAfterChange: CollectionAfterChangeHook<
  SalaryRange
> = async ({ doc }) => {
  if (doc._status === 'published') {
    revalidateTag('list-salaryRange')
    console.log(`list-salaryRange at ${new Date().getTime()}`)
  }
}

export const revalidateSalaryRangeAfterDelete: CollectionAfterDeleteHook<
  SalaryRange
> = async ({}) => {
  revalidateTag('list-salaryRange')
  console.log(`revalidated afterDelete salaryRange at ${new Date().getTime()}`)
}
