import {
  revalidateJobTypesAfterChange,
  revalidateJobTypesAfterDelete,
} from '../../hooks/revalidateJobTypes'
import { JOBS_GROUP_NAME } from '../../utils/constants'
import { formatString } from '../../utils/formatString'
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
    afterChange: [revalidateJobTypesAfterChange],
    afterDelete: [revalidateJobTypesAfterDelete],
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
