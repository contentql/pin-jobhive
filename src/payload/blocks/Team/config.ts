import { Block } from 'payload'

const TeamConfig: Block = {
  slug: 'Team',
  interfaceName: 'TeamType',
  labels: {
    singular: 'Team Block',
    plural: 'Team Blocks',
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
      name: 'team',
      label: 'Team',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          required: true,
          relationTo: 'media',
        },
        {
          name: 'name',
          label: 'Name',
          type: 'text',
        },
        {
          name: 'designation',
          label: 'Designation',
          type: 'text',
        },
      ],
    },
  ],
}

export default TeamConfig
