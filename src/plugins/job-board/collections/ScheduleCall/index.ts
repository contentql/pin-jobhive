import { CollectionConfig } from 'payload'

export const ScheduleCall: CollectionConfig = {
  slug: 'scheduleCall',
  labels: {
    singular: 'Schedule Call',
    plural: 'Schedule Calls',
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true, // Publicly readable by default
    create: () => true, // Allow submissions from the public
    update: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can update
    delete: ({ req: { user } }) => Boolean(user && user.role.includes('admin')), // Only admins can delete
  },
  hooks: {},
  fields: [
    {
      name: 'company',
      type: 'text',
      label: 'Company Name',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role',
      required: true,
    },
    {
      name: 'scheduledDate',
      type: 'date',
      label: 'Scheduled Date',
      access: {
        create: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can create
        update: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can update
      },
      admin: {
        description: 'The date and time for the scheduled call.',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'd MMM yyyy, h:mm a',
          timeIntervals: 15,
          minDate: new Date(),
        },
        placeholder: 'Select a date and time',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Call Status',
      access: {
        create: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can create
        update: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can update
      },
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Scheduled',
          value: 'scheduled',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
        {
          label: 'Rescheduled',
          value: 'rescheduled',
        },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Admin Notes',
      access: {
        create: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can create
        update: ({ req: { user } }) =>
          Boolean(user && user.role.includes('admin')), // Only admins can update
      },
      admin: {
        description: 'Additional notes or comments by the admin.',
      },
    },
  ],
}
