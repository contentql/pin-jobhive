import { Block } from 'payload'

const TermsOrPrivacyConfig: Block = {
  slug: 'TermsOrPrivacy',
  interfaceName: 'TermsOrPrivacyType',
  imageURL: '/images/blocks/terms.png',
  labels: {
    plural: 'TermsOrPrivacy Blocks',
    singular: 'TermsOrPrivacy Block',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
      admin: {
        description:
          'Main content of the page. Use the rich text editor for formatting.',
      },
    },
  ],
}

export default TermsOrPrivacyConfig
