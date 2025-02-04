import path from 'path'
import { Page } from 'payload-types'

export type HomePageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>
export type HomePageImagesType = {
  alt: string
  filePath: string
}
export const homePageData: HomePageDataType = {
  title: 'Home',

  layout: [
    {
      heading: 'We’re changing the way people connect',
      description:
        "Explore thousands of job opportunities tailored to your skills and interests. Whether you're looking for your next career move or seeking top talent for your company, we've got you covered. Post jobs, apply with ease, and take the next step in your professional journey today!",
      blockName: null,

      heroSectionImages: [
        {
          image: 0,
        },

        {
          image: 0,
        },

        {
          image: 0,
        },

        {
          image: 0,
        },
        {
          image: 0,
        },
      ],
      blockType: 'Hero',
    },

    {
      heading: 'Featured Jobs',
      description:
        'Discover the most in-demand job openings from top employers. These featured listings highlight exciting career opportunities with competitive benefits.',
      buttonText: 'Load More Jobs',
      blockName: null,
      blockType: 'FeaturedJobs',
    },

    {
      heading: 'Trusted by the world’s most innovative teams',
      blockName: null,

      companyLogos: [
        {
          companyLogo: 0,
        },

        {
          companyLogo: 0,
        },

        {
          companyLogo: 0,
        },

        {
          companyLogo: 0,
        },
      ],
      blockType: 'Companies',
    },

    {
      image: 0,
      blockName: null,
      blockType: 'ImageBlock',
    },

    {
      heading: 'Our Values – What Drives Us',
      description:
        'We believe in creating opportunities that empower individuals and businesses alike. Our core values shape the way we connect job seekers with employers.',
      blockName: null,

      values: [
        {
          title: 'Be world-class',
          description:
            'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
        },

        {
          title: 'Share everything you know',
          description:
            'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
        },

        {
          title: 'Always learning',
          description:
            'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
        },
      ],
      blockType: 'Values',
    },

    {
      heading: 'Our team',
      description:
        'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
      blockName: null,

      team: [
        {
          image: 0,
          name: 'Michael Foster',
          designation: 'Co-Founder / CTO',
        },
      ],
      blockType: 'Team',
    },

    {
      heading: 'From the blog',
      description: 'Learn how to grow your business with our expert advice.',
      blockName: null,
      blockType: 'BlogPosts',
    },
  ],

  isHome: true,
  _status: 'published',
}

export const heroImagesData: HomePageImagesType[] = [
  {
    alt: 'hero_image_1',
    filePath: path.join(process.cwd(), '/public/images/seed/hero_image_1.png'),
  },
  {
    alt: 'hero_image_2',
    filePath: path.join(process.cwd(), '/public/images/seed/hero_image_2.png'),
  },
  {
    alt: 'hero_image_3',
    filePath: path.join(process.cwd(), '/public/images/seed/hero_image_3.png'),
  },
  {
    alt: 'hero_image_4',
    filePath: path.join(process.cwd(), '/public/images/seed/hero_image_4.png'),
  },
  {
    alt: 'hero_image_5',
    filePath: path.join(process.cwd(), '/public/images/seed/hero_image_5.png'),
  },
]

export const companyImagesData: HomePageImagesType[] = [
  {
    alt: 'Company_1',
    filePath: path.join(process.cwd(), '/public/images/seed/company_1.png'),
  },
  {
    alt: 'Company_2',
    filePath: path.join(process.cwd(), '/public/images/seed/company_2.png'),
  },
  {
    alt: 'Company_3',
    filePath: path.join(process.cwd(), '/public/images/seed/company_3.png'),
  },
  {
    alt: 'Company_4',
    filePath: path.join(process.cwd(), '/public/images/seed/company_4.png'),
  },
]

export const imageBlockImageData: HomePageImagesType = {
  alt: 'image_1',
  filePath: path.join(process.cwd(), '/public/images/seed/image_1.png'),
}

export const teamImagesData: HomePageImagesType[] = [
  {
    alt: 'Team_1',
    filePath: path.join(process.cwd(), '/public/images/seed/team_1.png'),
  },
]
