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
  access: {
    read: () => true, // Publicly readable by default
    create: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can create
    update: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can delete
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
}
