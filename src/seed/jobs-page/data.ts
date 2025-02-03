import { Page } from 'payload-types'

export type JobsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type HomePageImagesType = {
  alt: string
  filePath: string
}
export const jobsPageData: JobsPageDataType = {
  title: 'Jobs',
  slug: 'jobs',
  layout: [
    {
      title: 'Jobs',
      collectionSlug: 'jobPosts',
      blockName: null,
      blockType: 'List',
    },
  ],

  _status: 'published',
}
