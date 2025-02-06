import { revalidateJobRoles } from '../../hooks/revalidateJobRoles'
import { JOBS_GROUP_NAME } from '../../utils/constants'
import { formatString } from '../../utils/formatString'
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
  admin: {
    useAsTitle: 'title',
    group: JOBS_GROUP_NAME,
  },
  access: {
    read: () => true, // Publicly readable by default
    create: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can create
    update: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can delete
  },
  hooks: {
    afterChange: [revalidateJobRoles],
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
    {
      name: 'slug',
      type: 'text',
      label: 'Slug',
      hooks: {
        beforeChange: [
          async ({ data }) => {
            return formatString(data?.title, {
              trim: true,
            })
          },
        ],
      },
      admin: {
        readOnly: true,
        position: 'sidebar',
        description: 'Auto generated after creation',
      },
    },
  ],
}
