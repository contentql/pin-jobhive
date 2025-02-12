import { Block } from 'payload'

const FeaturedJobsConfig: Block = {
  slug: 'FeaturedJobs',
  interfaceName: 'FeaturedJobsType',
  labels: {
    singular: 'FeaturedJobs Block',
    plural: 'FeaturedJobs Blocks',
  },
  imageURL: '/images/blocks/featured-jobs.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
    },
  ],
}

export default FeaturedJobsConfig
