import {
  revalidateJobPostsAfterChange,
  revalidateJobPostsAfterDelete,
} from '../../hooks/revalidateJobPosts'
import { JOBS_GROUP_NAME } from '../../utils/constants'
import { formatString } from '../../utils/formatString'
import { CollectionConfig } from 'payload'

export const JobPosts: CollectionConfig = {
  slug: 'jobPosts',
  labels: {
    singular: 'Job Post',
    plural: 'Job Posts',
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
    group: JOBS_GROUP_NAME,
  },
  hooks: {
    afterChange: [revalidateJobPostsAfterChange],
    afterDelete: [revalidateJobPostsAfterDelete],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // Company Details Tab
        {
          label: 'Company Details',
          fields: [
            // Company Details Group
            {
              name: 'company',
              type: 'group',
              label: 'Company Details',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Company Name',
                  required: true,
                  admin: {
                    placeholder: 'e.g., Acme Corporation',
                    description: 'The name of the company posting the job.',
                  },
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'Company Email',
                  required: true,
                  admin: {
                    placeholder: 'e.g., hr@acme.com',
                    description:
                      'The primary contact email for job applications.',
                  },
                },
                {
                  name: 'logo',
                  type: 'upload',
                  label: 'Company Logo',
                  relationTo: 'media',
                  required: true,
                  admin: {
                    description:
                      'Upload the company logo to be displayed with the job post.',
                  },
                },
                {
                  name: 'website',
                  type: 'text',
                  label: 'Company Website',
                  admin: {
                    placeholder: 'e.g., https://acme.com',
                    description: 'The official website of the company.',
                  },
                },
                {
                  name: 'location',
                  type: 'text',
                  label: 'Company Location',
                  admin: {
                    placeholder: 'e.g., New York, NY, USA',
                    description:
                      'The headquarters or primary office location of the company.',
                  },
                },
              ],
            },
          ],
        },

        // Opening and Closing Dates Tab
        {
          label: 'Job Posting Dates',
          fields: [
            // Opening and Closing Dates
            {
              name: 'dates',
              type: 'group',
              label: 'Job Posting Dates',
              fields: [
                {
                  name: 'openingDate',
                  type: 'date',
                  label: 'Opening Date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                      timeIntervals: 10,
                    },
                    description:
                      'The date when the job posting becomes active.',
                    placeholder: 'Select the opening date for the job post.',
                  },
                },
                {
                  name: 'closingDate',
                  type: 'date',
                  label: 'Closing Date',
                  admin: {
                    date: {
                      pickerAppearance: 'dayAndTime',
                      timeIntervals: 10,
                    },
                    description: 'The date when the job posting expires.',
                    placeholder: 'Select the closing date for the job post.',
                  },
                },
              ],
            },
          ],
        },

        // Job Details Tab
        {
          label: 'Job Details',
          fields: [
            // Job Details Group
            {
              name: 'jobDetails',
              type: 'group',
              label: 'Job Details',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Job Title',
                  required: true,
                  admin: {
                    placeholder: 'e.g., Software Engineer',
                    description: 'The title of the job position.',
                  },
                },
                {
                  name: 'slug',
                  type: 'text',
                  label: 'Slug',
                  hooks: {
                    beforeChange: [
                      async ({ data }) => {
                        return formatString(data?.jobDetails.title, {
                          trim: true,
                        })
                      },
                    ],
                  },
                  admin: {
                    readOnly: true,
                    description: 'Auto-populated based on title you entered.',
                  },
                },
                {
                  name: 'type',
                  type: 'relationship',
                  relationTo: 'jobTypes',
                  label: 'Job Type',
                  required: true,
                  admin: {
                    description:
                      'Select the type of employment for the job (e.g., Full-time, Part-time, Contract, Freelance).',
                  },
                },
                {
                  name: 'roles',
                  type: 'relationship',
                  relationTo: 'jobRoles',
                  label: 'Job Roles',
                  hasMany: true,
                  required: true,
                  admin: {
                    description:
                      'Select the roles for the job (e.g., Software Engineer, Project Manager, Data Analyst).',
                  },
                },
                {
                  name: 'location',
                  type: 'text',
                  label: 'Job Location',
                  required: true,
                  hasMany: true,
                  admin: {
                    placeholder: 'e.g., Remote or San Francisco, CA, USA',
                    description: 'The location where the job will be based.',
                  },
                },
                {
                  name: 'salary',
                  type: 'group',
                  label: 'Salary',
                  fields: [
                    {
                      name: 'type',
                      type: 'radio',
                      label: 'Salary Type',
                      options: [
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Range', value: 'range' },
                      ],
                      defaultValue: 'fixed',
                      admin: {
                        description:
                          'Select the type of salary (e.g., Fixed, Range).',
                      },
                    },
                    {
                      name: 'amount',
                      type: 'number',
                      label: 'Salary Amount',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'fixed',
                        placeholder: 'e.g., 100000',
                      },
                    },
                    {
                      name: 'min',
                      type: 'number',
                      label: 'Minimum Salary',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'range',
                        placeholder: 'e.g., 50000',
                        description:
                          'The minimum annual salary for the position.',
                      },
                    },
                    {
                      name: 'max',
                      type: 'number',
                      label: 'Maximum Salary',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData.type === 'range',
                        placeholder: 'e.g., 100000',
                        description:
                          'The maximum annual salary for the position.',
                      },
                    },
                  ],
                },
                {
                  name: 'description',
                  type: 'richText',
                  label: 'Job Description',
                  required: true,
                  admin: {
                    description:
                      'Include key details about the job role, such as responsibilities, team structure, and expectations.',
                  },
                },
                {
                  name: 'remote',
                  type: 'checkbox',
                  label: 'Remote Job',
                  admin: {
                    description:
                      'Check this box if the job can be performed remotely.',
                  },
                },
              ],
            },
          ],
        },

        // Job Requirements Tab
        {
          label: 'Job Requirements',
          fields: [
            // Job Requirements Group
            {
              name: 'requirements',
              type: 'group',
              label: 'Job Requirements',
              fields: [
                {
                  name: 'experience',
                  type: 'number',
                  label: 'Experience Required',
                  admin: {
                    placeholder:
                      'e.g., 3+ years of software development experience',
                    description:
                      'Specify the required years of experience for the position.',
                  },
                },
                {
                  name: 'qualifications',
                  type: 'text',
                  label: 'Qualifications',
                  hasMany: true,
                  admin: {
                    placeholder: 'e.g., Bachelor’s degree in Computer Science',
                    description: 'List the required qualification to the job.',
                  },
                },
                {
                  name: 'skills',
                  type: 'text',
                  label: 'Skills',
                  hasMany: true,
                  admin: {
                    placeholder: 'e.g., JavaScript, React, Node.js',
                    description:
                      'List the programming languages, frameworks, and tools required for the job.',
                  },
                },
              ],
            },
          ],
        },

        // Application Information Tab
        {
          label: 'Job Application Form Information',
          fields: [
            // Application Information Group
            {
              name: 'application',
              type: 'group',
              label: 'Job Application Form Information',
              fields: [
                {
                  name: 'applyType',
                  type: 'radio',
                  label: 'Application Form Type',
                  required: true,
                  options: [
                    {
                      label: 'Internal Form',
                      value: 'internal',
                    },
                    {
                      label: 'External Form Url',
                      value: 'external',
                    },
                  ],
                  defaultValue: 'internal',
                  admin: {
                    layout: 'horizontal',
                    description:
                      'Select whether the application form URL is internal (linking to a form within the site) or external.',
                  },
                },
                {
                  name: 'externalFormUrl',
                  type: 'text',
                  label: 'External Form URL',
                  required: true,
                  admin: {
                    placeholder:
                      'e.g., https://acme.com/careers/software-engineer',
                    description:
                      'Provide the URL where candidates can apply for the job if external.',
                    condition: (_, siblingData) =>
                      siblingData?.applyType === 'external',
                  },
                },
                {
                  name: 'internalForm',
                  type: 'relationship',
                  relationTo: 'forms',
                  label: 'Internal Application Form',
                  required: true,
                  admin: {
                    description:
                      'Select the form where candidates can apply for the job if internal.',
                    condition: (_, siblingData) =>
                      siblingData?.applyType === 'internal',
                  },
                },
              ],
            },
          ],
        },

        // Other
        {
          label: 'Other',
          fields: [
            // Featured Field
            {
              name: 'featured',
              type: 'checkbox',
              label: 'Featured Job Post',
              defaultValue: false,
              admin: {
                description:
                  'Mark this job post to appear highlighted or featured in the listings.',
              },
            },
          ],
        },
      ],
    },
  ],
}
