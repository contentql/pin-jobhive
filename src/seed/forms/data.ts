import { RequiredDataFromCollectionSlug } from 'payload'

export type FormsDataType = RequiredDataFromCollectionSlug<'forms'>

export const formsData: FormsDataType[] = [
  {
    title: 'ContentQL Job Form',

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
]
