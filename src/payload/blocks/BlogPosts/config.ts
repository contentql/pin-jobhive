import { Block } from 'payload'

const BlogPostsConfig: Block = {
  slug: 'BlogPosts',
  interfaceName: 'BlogPostsType',
  labels: {
    singular: 'BlogPosts Block',
    plural: 'BlogPosts Blocks',
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
  ],
}

export default BlogPostsConfig
