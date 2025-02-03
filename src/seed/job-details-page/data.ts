import { Page } from 'payload-types'

export type JobDetailsPageDataType = Omit<
  Page,
  'id' | 'createdAt' | 'updatedAt'
>

export const jobDetailsPageData: JobDetailsPageDataType = {
  title: 'Job Details',

  layout: [
    {
      collectionSlug: 'jobPosts',
      blockName: null,
      blockType: 'Details',
    },
  ],

  isDynamic: true,
  _status: 'published',
  slug: 'job-details',
  pathMode: 'custom',
  path: '/job/[job-details]',
  parent: null,
}
