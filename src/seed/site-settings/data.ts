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
    description:
      'Find your dream job or hire top talent with JobHive. Easily post and apply for jobs, filter listings, and customize themes.',
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
      background: '#F8FAFC',
      foreground: '#E2E8F0',
      primary: '#60A5FA',
      primaryForeground: '#f1f5f9',
      card: '#ffffff',
      cardForeground: '#0a0a0a',
      popover: '#000000',
      popoverForeground: '#0a0a0a',
      secondary: '#e2e8f0',
      secondaryForeground: '#1e293b',
      muted: '#1A1A19',
      mutedForeground: '#5C5D5C',
      accent: '#e2e8f0',
      accentForeground: '#1e293b',
      destructive: '#ef4444',
      destructiveForeground: '#f1f5f9',
      border: '#ECEDF2',
      input: '#d1d5db',
      ring: '#9372f7',
    },

    darkMode: {
      background: '#0F172A',
      foreground: '#1e293b',
      primary: '#C084FC',
      primaryForeground: '#f1f5f9',
      card: '#0a0a0a',
      cardForeground: '#f1f5f9',
      popover: '#000000',
      popoverForeground: '#f1f5f9',
      secondary: '#232c3a',
      secondaryForeground: '#f1f5f9',
      muted: '#FFFAFA',
      mutedForeground: '#a1a8c0',
      accent: '#232c3a',
      accentForeground: '#f1f5f9',
      destructive: '#752626',
      destructiveForeground: '#f1f5f9',
      border: '#475569',
      input: '#232c3a',
      ring: '#7158e2',
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
