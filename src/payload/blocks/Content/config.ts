import { Block } from 'payload'

const ContentConfig: Block = {
  slug: 'Content',
  interfaceName: 'ContentType',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
  },
  //   imageURL: '/images/blocks/hero-block.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
    {
      name: 'contentDetails',
      label: 'Content Details',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default ContentConfig
