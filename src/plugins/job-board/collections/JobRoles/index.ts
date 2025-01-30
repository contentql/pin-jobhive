import { CollectionConfig } from 'payload'

export const JobRoles: CollectionConfig = {
  slug: 'jobRoles',
  labels: {
    singular: 'Job Role',
    plural: 'Job Roles',
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
      label: 'Job Role Name',
      required: true,
      admin: {
        placeholder: 'e.g., Software Engineer',
        description:
          'Enter the name of the job role (e.g., Software Engineer, Product Manager).',
      },
    },
  ],
}
