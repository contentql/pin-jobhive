import { RequiredDataFromCollectionSlug } from 'payload'

export type FormsDataType = RequiredDataFromCollectionSlug<'forms'>

export const formsData: FormsDataType[] = [
  {
    title: 'Logic Planet Form',

    fields: [
      {
        name: 'name',
        label: 'Name',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: null,
        blockName: null,
        blockType: 'email',
      },

      {
        name: 'message',
        label: 'Message',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'textarea',
      },

      {
        name: 'resume',
        label: 'Upload Resume',
        size: 5,
        width: 100,
        multiple: true,
        required: true,
        blockName: null,
        blockType: 'upload',
      },
    ],
    submitButtonLabel: 'Apply',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Job Applied Successfully',
          },
        ],
      },
    ],

    emails: [],
  },

  {
    title: 'Madison World Form',

    fields: [
      {
        name: 'name',
        label: 'Name',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: null,
        blockName: null,
        blockType: 'email',
      },

      {
        name: 'message',
        label: 'Message',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'textarea',
      },

      {
        name: 'resume',
        label: 'Upload Resume',
        size: 5,
        width: 100,
        multiple: true,
        required: true,
        blockName: null,
        blockType: 'upload',
      },
    ],
    submitButtonLabel: 'Apply',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Job Applied Successfully',
          },
        ],
      },
    ],

    emails: [],
  },

  {
    title: 'CloudMayo Form',

    fields: [
      {
        name: 'name',
        label: 'Name',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: null,
        blockName: null,
        blockType: 'email',
      },

      {
        name: 'message',
        label: 'Message',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'textarea',
      },

      {
        name: 'resume',
        label: 'Upload Resume',
        size: 5,
        width: 100,
        multiple: true,
        required: true,
        blockName: null,
        blockType: 'upload',
      },
    ],
    submitButtonLabel: 'Apply',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Job Applied Successfully',
          },
        ],
      },
    ],

    emails: [],
  },

  {
    title: 'Aderant Job Form',

    fields: [
      {
        name: 'name',
        label: 'Name',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: null,
        blockName: null,
        blockType: 'email',
      },

      {
        name: 'message',
        label: 'Message',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'textarea',
      },

      {
        name: 'resume',
        label: 'Upload Resume',
        size: 5,
        width: 100,
        multiple: true,
        required: true,
        blockName: null,
        blockType: 'upload',
      },
    ],
    submitButtonLabel: 'Apply',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Successfully Applied',
          },
        ],
      },
    ],

    emails: [],
  },

  {
    title: 'Contact Form',

    fields: [
      {
        name: 'name',
        label: 'Name',
        width: 100,
        defaultValue: null,
        required: true,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'email',
        label: 'Email',
        width: 100,
        required: true,
        blockName: null,
        blockType: 'email',
      },

      {
        name: 'subject',
        label: 'Subject',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'text',
      },

      {
        name: 'comment',
        label: 'Comment',
        width: 100,
        defaultValue: null,
        required: null,
        blockName: null,
        blockType: 'textarea',
      },
    ],
    submitButtonLabel: 'Send Message',
    confirmationType: 'message',

    confirmationMessage: [
      {
        children: [
          {
            text: 'Contact Form Submitted Successfully!',
          },
        ],
      },
    ],

    emails: [],
  },
]
