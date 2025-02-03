import { Page } from 'payload-types'

export type BlogsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type HomePageImagesType = {
  alt: string
  filePath: string
}
export const blogPageData: BlogsPageDataType = {
  title: 'blogs',
  slug: 'blogs',
  layout: [
    {
      title: 'Blogs',
      collectionSlug: 'blogs',
      blockName: null,
      blockType: 'List',
    },
  ],

  _status: 'published',
}
