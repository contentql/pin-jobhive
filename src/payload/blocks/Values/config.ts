import { Block } from 'payload'

const ValuesConfig: Block = {
  slug: 'Values',
  interfaceName: 'ValuesType',
  labels: {
    singular: 'Values Block',
    plural: 'Values Blocks',
  },
  imageURL: '/images/blocks/values.png',
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
      name: 'values',
      label: 'Values',
      type: 'array',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
        },
      ],
    },
  ],
}

export default ValuesConfig
