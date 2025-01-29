import { CollectionConfig } from 'payload'

export const JobTypes: CollectionConfig = {
  slug: 'jobTypes',
  labels: {
    singular: 'Job Type',
    plural: 'Job Types',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true, // Publicly readable by default
    create: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can create
    update: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can delete
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Job Type Name',
      required: true,
      admin: {
        placeholder: 'e.g., Full-Time',
        description:
          'Enter the name of the job type (e.g., Full-Time, Part-Time, Contract).',
      },
    },
  ],
}
