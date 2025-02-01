import { Page } from 'payload-types'

export type TermsPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const termsPageData: TermsPageDataType = {
  title: 'terms',

  layout: [
    {
      content: [
        {
          type: 'h1',

          children: [
            {
              text: 'Terms & Conditions:',
            },
          ],
        },

        {
          children: [
            {
              text: 'Welcome to our job platform. By accessing or using our services, you agree to the following terms and conditions:',
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '1. Account & User Responsibilities',
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
                  text: 'Users must provide accurate and up-to-date information during registration.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Employers and job seekers are responsible for their own interactions and agreements.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Any misuse, fraudulent activities, or violations may lead to account suspension or termination.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '2. Job Postings & Applications',
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
                  text: 'Employers must ensure job listings comply with all legal and ethical standards.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Job seekers should apply only for positions they are genuinely interested in and qualified for.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Misrepresentation by either party may result in removal from the platform.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '3. Privacy & Data Security',
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
                  text: 'We collect and process user data in accordance with our ',
                },

                {
                  text: 'Privacy Policy',
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
                  text: 'Users should not share sensitive personal or financial information outside the platform.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'We take security seriously but cannot guarantee absolute protection against third-party breaches.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '4. Payments & Transactions',
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
                  text: 'Any premium services, featured listings, or paid job applications must be processed through our secure payment gateway.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Refunds and cancellations will be handled as per our ',
                },

                {
                  text: 'Refund Policy',
                  bold: true,
                },

                {
                  text: '.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '5. Platform Liability & Disclaimers',
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
                  text: 'We provide a platform for job postings and applications but do not guarantee employment or hiring success.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'We are not responsible for disputes, agreements, or issues arising between job seekers and employers.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Users assume full responsibility for their use of the platform and interactions with others.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '6. Prohibited Activities',
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
                  text: 'Posting misleading or fake job listings.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Discriminatory, offensive, or harmful content.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Unauthorized scraping, data collection, or hacking attempts.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '7. Modifications to Terms',
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
                  text: 'We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of the latest terms.',
                },
              ],
            },
          ],
        },
      ],
      blockName: null,
      blockType: 'TermsOrPrivacy',
    },
  ],
  _status: 'published',
}
