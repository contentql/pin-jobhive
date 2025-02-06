import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'

export type BlogsDataType = RequiredDataFromCollectionSlug<'blogs'>
export type blogImageType = {
  alt: string
  filePath: string
}

export const blogsData: BlogsDataType[] = [
  {
    blogImage: 0,
    title: '5 Tips to Make Your Job Application Stand Out',
    description:
      'In today’s competitive job market, a well-crafted job application can make all the difference.',

    tags: [],

    author: [
      {
        relationTo: 'users',

        value: 0,
      },
    ],

    content: [
      {
        children: [
          {
            text: 'In today’s competitive job market, a well-crafted job application can make all the difference. Whether you’re a seasoned professional or just starting your career, these five tips will help you grab the attention of employers and increase your chances of landing your dream job.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '1. Tailor Your Resume & Cover Letter',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'Avoid sending generic applications. Customize your resume and cover letter for each job, highlighting relevant skills and experiences that align with the job description.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '2. Showcase Your Achievements',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'Instead of listing duties, focus on accomplishments. Use quantifiable data (e.g., “Increased sales by 30% in six months”) to demonstrate your impact in previous roles.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '3. Optimize for ATS (Applicant Tracking Systems)',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'Many companies use ATS to filter resumes. Use industry-relevant keywords and a simple format to ensure your application passes through automated screenings.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '4. Build a Strong Online Presence',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'Employers often review LinkedIn profiles before making hiring decisions. Keep your profile updated, showcase projects, and engage with industry-related content.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '5. Follow Up Professionally',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'After applying, send a polite follow-up email to express your interest in the position. A well-timed message can help you stand out among other candidates.',
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: 'Conclusion:',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'A great job application is more than just a resume—it’s your first impression. By applying these tips, you’ll increase your chances of securing interviews and advancing in your career.',
          },
        ],
      },

      {
        children: [
          {
            text: 'Looking for more job search tips? Stay tuned for more insights on our blog! 🚀',
          },
        ],
      },
    ],
    _status: 'published',
  },

  {
    blogImage: 0,
    title: 'How to Write a Job Post That Attracts Top Talent',
    description:
      "Hiring the right candidate starts with a well-crafted job post. A clear, engaging, and informative job posting can help attract qualified professionals while filtering out unqualified applicants. In this guide, we'll walk you through the essential elements of an effective job post.",

    tags: [],

    author: [
      {
        relationTo: 'users',

        value: 0,
      },
    ],

    content: [
      {
        type: 'h1',

        children: [
          {
            text: 'Key Elements of a Compelling Job Post',
            bold: true,
          },
        ],
      },

      {
        type: 'ol',

        children: [
          {
            type: 'li',

            children: [
              {
                children: [
                  {
                    text: 'Clear and Specific Job Title',
                    bold: true,
                  },
                ],
                type: 'h3',
              },

              {
                type: 'ul',

                children: [
                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Use industry-standard titles (e.g., “Software Engineer” instead of “Tech Wizard”).',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Keep it simple and searchable.',
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                children: [
                  {
                    text: 'Engaging Job Description',
                    bold: true,
                  },
                ],
                type: 'h3',
              },

              {
                type: 'ul',

                children: [
                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Briefly describe your company and what makes it a great place to work.',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Outline job responsibilities clearly.',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Highlight career growth opportunities.',
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                children: [
                  {
                    text: 'Required Skills & Qualifications',
                    bold: true,
                  },
                ],
                type: 'h3',
              },

              {
                type: 'ul',

                children: [
                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Separate must-have skills from preferred skills.',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Use bullet points for readability.',
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                children: [
                  {
                    text: 'Salary & Benefits',
                    bold: true,
                  },
                ],
                type: 'h3',
              },

              {
                type: 'ul',

                children: [
                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Be transparent about salary or offer a range.',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Mention perks like remote work, health benefits, or bonuses.',
                      },
                    ],
                  },
                ],
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                children: [
                  {
                    text: 'Application Process & Deadline',
                    bold: true,
                  },
                ],
                type: 'h3',
              },

              {
                type: 'ul',

                children: [
                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Explain the application process step by step.',
                      },
                    ],
                  },

                  {
                    type: 'li',

                    children: [
                      {
                        text: 'Set a clear deadline for applications.',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        type: 'h1',

        children: [
          {
            text: 'Best Practices for Optimizing Job Posts',
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
                text: 'Use keywords to improve search visibility.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Keep the job post concise but informative.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Use gender-neutral language to encourage diverse applications.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Include a call to action, like “Apply Now” or “Submit Your Resume Today.”',
              },
            ],
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '',
          },
        ],
      },
    ],

    meta: {
      title: null,
      description: null,
      image: null,
    },
    slug: 'how-to-write-a-job-post-that-attracts-top-talent',
    _status: 'published',
  },

  {
    blogImage: 0,
    title: 'Top Job Search Strategies to Land Your Dream Role',
    description:
      'Looking for a new job? The job market is competitive, but with the right approach, you can improve your chances of landing your dream role. Here are top job search strategies to help you stand out.',

    tags: [],

    author: [
      {
        relationTo: 'users',

        value: 0,
      },
    ],

    content: [
      {
        type: 'h3',

        children: [
          {
            text: '1. Where to Find the Best Job Opportunities',
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
                text: 'Explore job boards like Indeed, LinkedIn, and Glassdoor.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Check company websites for direct job listings.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Leverage industry-specific job portals.',
              },
            ],
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '2. Networking for Job Hunting',
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
                text: 'Connect with professionals in your industry on LinkedIn.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Attend networking events and career fairs.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Reach out to past colleagues and mentors.',
              },
            ],
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '3. Preparing for Job Interviews',
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
                text: 'Research the company and its culture.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Practice common interview questions.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Prepare examples of your achievements.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Dress professionally and arrive on time.',
              },
            ],
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: '4. Using Job Boards & Career Platforms Effectively',
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
                text: 'Set up job alerts for new openings.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Customize your resume for different job applications.',
              },
            ],
          },

          {
            type: 'li',

            children: [
              {
                text: 'Follow up after applying to show interest.',
              },
            ],
          },
        ],
      },

      {
        type: 'h3',

        children: [
          {
            text: 'Conclusion',
            bold: true,
          },
        ],
      },

      {
        children: [
          {
            text: 'Job searching takes time, but with the right strategy, you can find the right opportunity. Stay persistent, improve your application materials, and leverage networking to increase your chances.',
          },
        ],
      },
    ],

    meta: {
      title: null,
      description: null,
      image: null,
    },
    slug: 'top-job-search-strategies-to-land-your-dream-role',
    _status: 'published',
  },
]

export const blogsImagesData: blogImageType[] = [
  {
    alt: 'Blog 1',
    filePath: path.join(process.cwd(), '/public/images/seed/blog_1.png'),
  },
  {
    alt: 'Blog 2',
    filePath: path.join(process.cwd(), '/public/images/seed/blog_2.png'),
  },
  {
    alt: 'Blog 3',
    filePath: path.join(process.cwd(), '/public/images/seed/blog_3.png'),
  },
]
