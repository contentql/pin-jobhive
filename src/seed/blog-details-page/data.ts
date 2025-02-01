import { Page } from 'payload-types'

export type BlogDetailsPageDataType = Omit<
  Page,
  'id' | 'createdAt' | 'updatedAt'
>

export const blogDetailsPageData: BlogDetailsPageDataType = {
  title: 'blog-details',

  layout: [
    {
      collectionSlug: 'blogs',
      blockName: null,
      blockType: 'Details',
    },
  ],

  isDynamic: true,
  _status: 'published',
}
