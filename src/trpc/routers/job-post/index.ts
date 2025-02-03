import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({ config: configPromise })

export const jobPostRouter = router({
  getAllJobPosts: publicProcedure.query(async () => {
    try {
      const { docs: jobPosts } = await payload.find({
        collection: 'jobPosts',
      })

      return jobPosts
    } catch (error: any) {
      console.error(error)
      throw new Error(error.message)
    }
  }),
})
