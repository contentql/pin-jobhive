import { Page } from 'payload-types'

export type ContactPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type HomePageImagesType = {
  alt: string
  filePath: string
}
export const contactPageData: ContactPageDataType = {
  title: 'contact',

  layout: [
    {
      address: '329 Queensberry Street, North Melbourne VIC 3051, Australia.',
      contactNumber: '1234567890',
      mail: 'contact.jobhive@example.com',

      contactForm: 0,
      blockName: null,
      blockType: 'Contact',
    },
  ],

  meta: {
    title: null,
    description: null,
    image: null,
  },

  _status: 'published',
}
