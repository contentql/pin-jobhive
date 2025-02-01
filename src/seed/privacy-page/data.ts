import { Page } from 'payload-types'

export type PrivacyPageDataType = Omit<Page, 'id' | 'createdAt' | 'updatedAt'>

export const privacyPageData: PrivacyPageDataType = {
  title: 'privacy',

  layout: [
    {
      content: [
        {
          type: 'h1',

          children: [
            {
              text: 'Privacy Policy',
            },
          ],
        },

        {
          children: [
            {
              text: 'Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our job platform.',
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '1. Information We Collect',
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
                  text: 'Personal Information:',
                  bold: true,
                },

                {
                  text: ' Name, email, phone number, resume, and other job-related details.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Employer Information:',
                  bold: true,
                },

                {
                  text: ' Company name, job listings, contact details, and hiring preferences.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Usage Data:',
                  bold: true,
                },

                {
                  text: ' IP address, browser type, and interactions with our platform.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Payment Information:',
                  bold: true,
                },

                {
                  text: ' If applicable, payment details are processed securely through third-party providers.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '2. How We Use Your Information',
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
                  text: 'To facilitate job applications and connections between job seekers and employers.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'To improve platform functionality, user experience, and security.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'To send important updates, notifications, and job recommendations.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'To comply with legal and regulatory requirements.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '3. Data Sharing & Third-Party Services',
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
                  text: 'We do not sell or share personal data with third parties for marketing purposes.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Employers may view job seekers’ profiles and applications as part of the hiring process.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'We may use third-party services for analytics, payments, and security.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '4. Data Protection & Security',
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
                  text: 'We implement industry-standard security measures to protect user data.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Users should ensure their login credentials remain confidential.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'While we take strong precautions, we cannot guarantee absolute security from breaches.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '5. Cookies & Tracking Technologies',
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
                  text: 'We use cookies to improve website performance and user experience.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Users can manage cookie preferences in their browser settings.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '6. User Rights & Choices',
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
                  text: 'Users can update or delete their profiles at any time.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'You can opt out of marketing emails and notifications.',
                },
              ],
            },

            {
              type: 'li',

              children: [
                {
                  text: 'Requests related to data access, correction, or deletion can be submitted via our contact page.',
                },
              ],
            },
          ],
        },

        {
          type: 'h3',

          children: [
            {
              text: '7. Policy Updates',
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
                  text: 'We may update this policy periodically. Continued use of our platform implies acceptance of the latest terms.',
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
