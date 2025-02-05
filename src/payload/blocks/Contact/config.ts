import { Block } from 'payload'

const ContactConfig: Block = {
  slug: 'Contact',
  interfaceName: 'ContactType',
  labels: {
    singular: 'Contact Block',
    plural: 'Contact Blocks',
  },
  //   imageURL: '/images/blocks/hero-block.png',
  fields: [
    {
      name: 'address',
      label: 'Address',
      type: 'text',
    },
    {
      name: 'contactNumber',
      label: 'Contact Number',
      type: 'text',
    },
    {
      name: 'mail',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'contactForm',
      label: 'Contact Form',
      type: 'relationship',
      relationTo: 'forms',
    },
  ],
}

export default ContactConfig
