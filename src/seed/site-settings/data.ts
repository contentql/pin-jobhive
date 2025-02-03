import path from 'path'
import { DataFromGlobalSlug } from 'payload'

export type siteSettingsDataType = Omit<
  DataFromGlobalSlug<'site-settings'>,
  'id'
>

export type ImageType = {
  alt: string
  filePath: string
}

export const siteSettingsData: siteSettingsDataType = {
  general: {
    title: 'JobHive',
    description: 'Post and Apply for Jobs',

    faviconUrl: 0,

    ogImageUrl: 0,
    currency: 'usd',
  },

  navbar: {
    logo: {
      imageUrl: 0,
      height: null,
      width: null,
    },

    menuLinks: [],
  },

  footer: {
    logo: {
      imageUrl: 0,
      height: null,
      width: null,
      description: null,
    },

    footerLinks: [],

    socialLinks: [
      {
        platform: 'facebook',
        value: 'https://www.facebook.com/',
      },

      {
        platform: 'instagram',
        value: 'https://www.instagram.com/',
      },

      {
        platform: 'twitter',
        value: 'https://x.com/?mx=2',
      },

      {
        platform: 'github',
        value: 'https://github.com/',
      },

      {
        platform: 'youtube',
        value: 'https://www.youtube.com/',
      },
    ],
    copyright: '© 2024 Your Company, Inc. All rights reserved.',
  },

  themeSettings: {
    lightMode: {
      primary: '#60A5FA',
      background: '#F8FAFC',
      text: '#1A1A19',
      foreground: '#E2E8F0',
      popover: '#000000',
      border: '#ECEDF2',
    },

    darkMode: {
      primary: '#C084FC',
      background: '#0F172A',
      text: '#FFFAFA',
      foreground: '#1e293b',
      popover: '#000000',
      border: '#475569',
    },

    fonts: {
      display: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Chewy&display=swap',
        fontName: 'Chewy',
      },

      body: {
        type: 'googleFont',
        customFont: null,
        remoteFont:
          'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap',
        fontName: 'Geist',
      },
    },
    radius: 'small',
  },
}

export const siteSettingsImages: ImageType[] = [
  {
    alt: 'Logo',
    filePath: path.join(process.cwd(), '/public/images/seed/logo.png'),
  },
]
