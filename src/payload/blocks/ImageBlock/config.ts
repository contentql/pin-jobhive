import { Block } from 'payload'

const ImageBlockConfig: Block = {
  slug: 'ImageBlock',
  interfaceName: 'ImageBlockType',
  labels: {
    singular: 'ImageBlock Block',
    plural: 'ImageBlock Blocks',
  },
  //   imageURL: '/images/blocks/hero-block.png',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default ImageBlockConfig
