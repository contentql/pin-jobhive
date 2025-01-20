import { Block } from 'payload'

const CompaniesConfig: Block = {
  slug: 'Companies',
  interfaceName: 'CompaniesType',
  labels: {
    singular: 'Companies Block',
    plural: 'Companies Blocks',
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
      name: 'companyLogos',
      label: 'Company Logos',
      type: 'array',
      fields: [
        {
          name: 'companyLogo',
          type: 'upload',
          required: true,
          label: 'Company Logo',
          relationTo: 'media',
        },
      ],
    },
  ],
}

export default CompaniesConfig
