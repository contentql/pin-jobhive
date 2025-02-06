import { SalaryRange } from '@payload-types'
import { revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook } from 'payload'

export const revalidateSalaryRange: CollectionAfterChangeHook<
  SalaryRange
> = async ({ doc }) => {
  if (doc._status === 'published') {
    revalidateTag('list-salaryRange')
    console.log(`list-salaryRange at ${new Date().getTime()}`)
  }
}
