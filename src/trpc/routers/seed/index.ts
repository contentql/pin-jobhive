import { TRPCError } from '@trpc/server'
import ora from 'ora'

import { seedAuthors } from '@/seed/authors'
import { seedBlogDetailsPage } from '@/seed/blog-details-page'
import { seedBlogsPage } from '@/seed/blog-page'
import { seedBlogs } from '@/seed/blogs'
import { seedContactPage } from '@/seed/contact-page'
import { seedForms } from '@/seed/forms'
import { seedHomePage } from '@/seed/home-page'
import { seedJobDetailsPage } from '@/seed/job-details-page'
import { seedJobPosts } from '@/seed/job-posts'
import { seedJobRoles } from '@/seed/job-roles'
import { seedJobTypes } from '@/seed/job-type'
import { seedJobsPage } from '@/seed/jobs-page'
import { seedPrivacyPage } from '@/seed/privacy-page'
import { seedSalaryRange } from '@/seed/salary-range'
import { seedSiteSettings } from '@/seed/site-settings'
import { seedTermsPage } from '@/seed/terms-page'
import { seedUsers } from '@/seed/users/seed'
import { publicProcedure, router } from '@/trpc'

export const seedRouter = router({
  runSeed: publicProcedure.mutation(async () => {
    const spinner = ora({
      text: 'Starting the seeding process...',
      color: 'cyan',
      spinner: 'dots',
    }).start()
    try {
      // Ensure that the seeding functions are called in the correct order.
      // The blogs seeding depends on tags and authors being seeded first.
      // Therefore, make sure to seed tags and authors before seeding blogs.
      await seedUsers({ spinner })
      await seedAuthors(spinner)
      await seedJobTypes(spinner)
      await seedJobRoles(spinner)
      await seedSalaryRange(spinner)
      await seedForms(spinner)
      await seedBlogs(spinner)
      const contactPage = await seedContactPage(spinner)
      await seedJobPosts(spinner)
      const termsPage = await seedTermsPage(spinner)
      const privacy = await seedPrivacyPage(spinner)
      const blogsPage = await seedBlogsPage(spinner)
      await seedBlogDetailsPage(spinner)
      const jobsPage = await seedJobsPage(spinner)
      await seedJobDetailsPage(spinner)
      await seedHomePage(spinner)
      await seedSiteSettings({
        blogsPage: blogsPage,
        jobsPage: jobsPage,
        termsPage: termsPage,
        spinner,
        privacy: privacy,
        contactPage: contactPage,
      })

      return { success: true }
    } catch (error: any) {
      console.error('Error seeding:', error)
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: error.message,
      })
    }
  }),
})
