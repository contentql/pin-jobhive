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
]

export const blogsImagesData: blogImageType[] = [
  {
    alt: 'Project 1',
    filePath: path.join(process.cwd(), '/public/images/seed/blog_1.png'),
  },
]
