import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'

export type JobPostsDataType = RequiredDataFromCollectionSlug<'jobPosts'>
export type jobsImageType = {
  alt: string
  filePath: string
}

export const jobPostsData: JobPostsDataType[] = [
  {
    company: {
      name: 'ContentQL',
      email: 'contentql@gmail.com',

      logo: 0,
      website: 'https://contentql.io/',
      location: 'USA',
    },

    dates: {
      openingDate: '2025-01-29T11:30:00.000Z',
      closingDate: '2025-02-20T11:30:00.000Z',
    },

    jobDetails: {
      title: 'UI/UX Designer for Theme Development',
      slug: 'uiux-designer-for-theme-development',

      type: 0,

      roles: [],

      description: [
        {
          type: 'h3',

          children: [
            {
              text: 'Job Description',
              bold: true,
            },
          ],
        },

        {
          children: [
            {
              text: 'We are looking for a talented and creative UI/UX Designer to join our team and help design high-quality themes for ContentQL. You will play a key role in crafting visually appealing, responsive, and user-friendly themes that enhance the experience of our users. If you have a strong portfolio of theme designs and a passion for clean, modern, and functional UI/UX, we’d love to hear from you!',
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: 'Responsibilities',
              bold: true,
            },
          ],
        },

        {
          type: 'ul',

          children: [
            {
              type: 'li',

              children: [
                {
                  text: 'Design and develop visually stunning and user-friendly themes for ContentQL.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Ensure themes are fully responsive and optimized for all devices.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Work closely with developers to implement and refine theme designs.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Create wireframes, prototypes, and mockups to present design concepts.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Ensure UI/UX best practices are followed for usability and accessibility.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Maintain consistency in design language, typography, and branding across themes.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Stay updated with the latest design trends and industry standards.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: 'Requirements',
              bold: true,
            },
          ],
        },

        {
          type: 'ul',

          children: [
            {
              type: 'li',

              children: [
                {
                  text: 'Proven experience in UI/UX design with a strong portfolio of theme designs.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Proficiency in design tools like Figma, Adobe XD, or Sketch.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Strong understanding of UX principles, responsive design, and accessibility standards.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Ability to collaborate with developers and understand basic HTML, CSS, and JavaScript concepts.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Attention to detail and a passion for delivering high-quality work.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Excellent communication skills and ability to take feedback constructively.',
                },
              ],
            },
          ],
        },
      ],
      location: 'Hyderabad',

      salaryRange: {
        min: 5000,
        max: 7500,
      },
      remote: null,
    },

    requirements: {
      experience: '2',

      qualifications: [
        {
          qualification: 'B.Tech',
        },

        {
          qualification: 'B.Sc',
        },
      ],

      skills: [
        {
          skill: 'UI/UX',
        },

        {
          skill: 'Figma',
        },

        {
          skill: 'Sketch',
        },

        {
          skill: 'Tailwind Css',
        },

        {
          skill: 'NextJs',
        },

        {
          skill: 'JavaScript',
        },
      ],
    },

    application: {
      applyType: 'internal',
      externalFormUrl: null,

      internalForm: 0,
    },
    featured: true,

    _status: 'published',
  },
]

export const jobImagesData: jobsImageType[] = [
  {
    alt: 'Company 1',
    filePath: path.join(process.cwd(), '/public/images/seed/job_1.png'),
  },
]
