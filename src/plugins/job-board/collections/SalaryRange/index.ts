import { revalidateSalaryRange } from '../../hooks/revalidateSalaryRange'
import { JOBS_GROUP_NAME } from '../../utils/constants'
import { CollectionConfig } from 'payload'

export const SalaryRange: CollectionConfig = {
  slug: 'salaryRange',
  labels: {
    singular: 'Salary Range',
    plural: 'Salary Ranges',
  },
  versions: {
    drafts: true,
  },
  admin: {
    useAsTitle: 'salaryType',
    group: JOBS_GROUP_NAME,
  },
  access: {
    read: () => true, // Publicly readable by default
    create: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can create
    update: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can delete
  },
  hooks: {
    afterChange: [revalidateSalaryRange],
  },
  fields: [
    {
      name: 'salaryType',
      label: 'Salary Type',
      type: 'select',
      required: true,
      defaultValue: 'range',
      options: [
        { label: 'Range', value: 'range' },
        { label: 'Less Than', value: 'lessThan' },
        { label: 'Greater Than', value: 'greaterThan' },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'salaryMin',
          label: 'Minimum Salary',
          type: 'number',
          required: true,
          admin: {
            step: 1000,
            condition: data =>
              data.salaryType === 'range' || data.salaryType === 'greaterThan',
          },
        },
        {
          name: 'salaryMax',
          label: 'Maximum Salary',
          type: 'number',
          required: true,
          admin: {
            step: 1000,
            condition: data =>
              data.salaryType === 'range' || data.salaryType === 'lessThan',
          },
        },
      ],
    },
  ],
}
