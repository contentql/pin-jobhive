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
      name: 'Aderant',
      email: 'aderant@gmail.com',

      logo: 0,
      website: 'https://www.aderant.com/',
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

      roles: [1, 2],

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
      experience: 3,

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

  {
    company: {
      name: 'CloudMoyo',
      email: 'cloudMoyo@gmail.com',

      logo: 0,
      website: 'https://www.cloudmoyo.com/',
      location: 'Hyderabad',
    },

    dates: {
      openingDate: '2025-02-05T11:30:00.000Z',
      closingDate: '2025-04-30T11:30:00.000Z',
    },

    jobDetails: {
      title: 'Frontend Developer - Next.js & React',
      slug: 'frontend-developer-nextjs-and-react',

      type: 0,

      roles: [1, 2],

      description: [
        {
          children: [
            {
              text: 'We are seeking a highly skilled ',
            },

            {
              text: 'Frontend Developer',
              bold: true,
            },

            {
              text: ' with expertise in ',
            },

            {
              text: 'Next.js & React',
              bold: true,
            },

            {
              text: " to join our team. You will work on building fast, interactive, and scalable web applications while collaborating with UI/UX designers and backend developers. If you have a passion for creating seamless user experiences and writing clean, maintainable code, we'd love to hear from you!",
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
                  text: 'Develop responsive and performant front-end applications using ',
                },

                {
                  text: 'React.js',
                  bold: true,
                },

                {
                  text: ' and ',
                },

                {
                  text: 'Next.js',
                  bold: true,
                },

                {
                  text: '.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Optimize applications for ',
                },

                {
                  text: 'speed, accessibility, and SEO',
                  bold: true,
                },

                {
                  text: '.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Collaborate with UI/UX designers to translate designs into functional web pages.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Implement and maintain reusable components and design systems.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Debug and resolve performance issues and browser inconsistencies.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Stay updated with the latest frontend technologies and best practices.',
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
          children: [
            {
              text: '✔ Proven experience in ',
            },

            {
              text: 'React.js and Next.js',
              bold: true,
            },

            {
              text: ' development.\n✔ Strong knowledge of ',
            },

            {
              text: 'JavaScript, TypeScript, HTML, and CSS',
              bold: true,
            },

            {
              text: '.\n✔ Experience with ',
            },

            {
              text: 'Tailwind CSS, Material UI, or Styled Components',
              bold: true,
            },

            {
              text: '.\n✔ Familiarity with ',
            },

            {
              text: 'REST APIs, GraphQL, and server-side rendering (SSR)',
              bold: true,
            },

            {
              text: '.\n✔ Strong debugging and troubleshooting skills.\n✔ Excellent collaboration and problem-solving abilities.',
            },
          ],
        },
      ],
      location: 'Bengaluru',

      salaryRange: {
        min: 6000,
        max: 8500,
      },
      remote: false,
    },

    requirements: {
      experience: 6,

      qualifications: [
        {
          qualification: 'B.Tech',
        },
      ],

      skills: [
        {
          skill: 'JavaScript',
        },

        {
          skill: 'Html',
        },

        {
          skill: 'TypeScript',
        },

        {
          skill: 'Css',
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

  {
    company: {
      name: 'Madison World',
      email: 'madisonworld@gmail.com',

      logo: 0,
      website: 'https://www.madisonindia.com/',
      location: 'NewYork',
    },

    dates: {
      openingDate: '2025-03-30T11:30:00.000Z',
      closingDate: '2025-09-15T11:30:00.000Z',
    },

    jobDetails: {
      title: 'Marketing Specialist - Digital Campaigns',
      slug: 'marketing-specialist-digital-campaigns',

      type: 0,

      roles: [1, 2],

      description: [
        {
          children: [
            {
              text: 'We are seeking a ',
            },

            {
              text: 'Marketing Specialist',
              bold: true,
            },

            {
              text: ' to drive our digital campaigns and online growth. You will work on branding, SEO, PPC, social media, and content marketing strategies.',
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
                  text: 'Develop and execute ',
                },

                {
                  text: 'SEO & PPC campaigns',
                  bold: true,
                },

                {
                  text: ' for brand awareness and lead generation.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Manage ',
                },

                {
                  text: 'Google Ads, Facebook Ads, and LinkedIn Ads',
                  bold: true,
                },

                {
                  text: '.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Analyze campaign performance and optimize for better ROI.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Create compelling content and social media strategies.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Collaborate with designers and developers to enhance the website experience.',
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
          children: [
            {
              text: '✔ 2+ years of experience in ',
            },

            {
              text: 'digital marketing',
              bold: true,
            },

            {
              text: '.\n✔ Proficiency in ',
            },

            {
              text: 'SEO, Google Analytics, and paid ads',
              bold: true,
            },

            {
              text: '.\n✔ Strong copywriting and content marketing skills.\n✔ Experience with ',
            },

            {
              text: 'email marketing & automation tools',
              bold: true,
            },

            {
              text: ' (Mailchimp, HubSpot, etc.).\n✔ Ability to analyze data and make data-driven decisions.',
            },
          ],
        },
      ],
      location: 'Chennai',

      salaryRange: {
        min: 4500,
        max: 7000,
      },
      remote: null,
    },

    requirements: {
      experience: 2,

      qualifications: [
        {
          qualification: 'Degree',
        },

        {
          qualification: 'B.Tech',
        },
      ],

      skills: [
        {
          skill: 'SEO',
        },

        {
          skill: 'Google Analytics',
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

  {
    company: {
      name: 'Logic Planet',
      email: 'logicplanet@gmail.com',

      logo: 0,
      website: 'https://www.logicplanet.com/',
      location: 'USA',
    },

    dates: {
      openingDate: '2025-02-02T11:30:00.000Z',
      closingDate: '2025-11-10T11:30:00.000Z',
    },

    jobDetails: {
      title: 'Product Manager - SaaS Applications',
      slug: 'product-manager-saas-applications',

      type: 0,

      roles: [1, 2],

      description: [
        {
          children: [
            {
              text: 'We are looking for a ',
            },

            {
              text: 'Product Manager',
              bold: true,
            },

            {
              text: ' to oversee the development and optimization of our SaaS applications. You will work closely with engineering, design, and marketing teams to create solutions that meet customer needs and business goals.',
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
                  text: 'Define product vision, roadmap, and success metrics.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Conduct market research and gather user feedback.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Prioritize features and improvements based on data and user needs.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Collaborate with developers and designers to ensure a seamless product experience.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Monitor product performance and iterate for continuous improvement.',
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
          children: [
            {
              text: '✔ 4+ years of experience in ',
            },

            {
              text: 'product management',
              bold: true,
            },

            {
              text: ' (preferably in SaaS).\n✔ Strong understanding of ',
            },

            {
              text: 'UI/UX principles',
              bold: true,
            },

            {
              text: ' and user behavior analytics.\n✔ Excellent problem-solving and strategic thinking skills.\n✔ Experience with ',
            },

            {
              text: 'Agile methodologies',
              bold: true,
            },

            {
              text: ' and roadmap planning.\n✔ Familiarity with tools like ',
            },

            {
              text: 'JIRA, Trello, or Asana',
              bold: true,
            },

            {
              text: '.',
            },
          ],
        },
      ],
      location: 'Delhi',

      salaryRange: {
        min: 9000,
        max: 12000,
      },
      remote: null,
    },

    requirements: {
      experience: 5,

      qualifications: [
        {
          qualification: 'MBA',
        },
      ],

      skills: [
        {
          skill: 'UI/UX principles ',
        },

        {
          skill: 'JIRA',
        },

        {
          skill: 'Trello',
        },
      ],
    },

    application: {
      applyType: 'internal',
      externalFormUrl: null,

      internalForm: 0,
    },
    featured: false,

    _status: 'published',
  },
]

export const jobImagesData: jobsImageType[] = [
  {
    alt: 'Job 1',
    filePath: path.join(process.cwd(), '/public/images/seed/job_1.png'),
  },
  {
    alt: 'Job 2',
    filePath: path.join(process.cwd(), '/public/images/seed/job_2.png'),
  },
  {
    alt: 'Job 3',
    filePath: path.join(process.cwd(), '/public/images/seed/job_3.png'),
  },
  {
    alt: 'Job 4',
    filePath: path.join(process.cwd(), '/public/images/seed/job_4.png'),
  },
]
