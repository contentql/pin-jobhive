import { env } from '@env'
import configPromise from '@payload-config'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata, Viewport } from 'next'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import { Toaster } from 'sonner'

import '@/app/(app)/globals.css'
import GoogleAdsense from '@/components/GoogleAdsense'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Provider from '@/trpc/Provider'

const getCachedSiteSettings = unstable_cache(
  async () => {
    const payload = await getPayload({
      config: configPromise,
    })

    const data = await payload.findGlobal({
      slug: 'site-settings',
      draft: false,
    })

    return data
  },
  ['site-settings'],
  { tags: ['site-settings'] },
)

export async function generateMetadata(): Promise<Metadata> {
  try {
    // calling the site-settings to get all the data
    const metadata = await getCachedSiteSettings()
    const generalSettings = metadata?.general

    const ogImageUrl =
      typeof generalSettings?.ogImageUrl === 'object'
        ? generalSettings?.ogImageUrl?.url!
        : '/images/seed/og-image.png'

    const title = {
      default: generalSettings?.title,
      template: `%s | ${generalSettings?.title}`,
    }

    const description = generalSettings?.description
    const ogImage = [
      {
        url: `${ogImageUrl}`,
        height: 630,
        width: 1200,
        alt: `og image`,
      },
    ]

    return {
      title,
      description,
      // we're appending the http|https int the env variable
      metadataBase: env.PAYLOAD_URL as unknown as URL,
      openGraph: {
        title,
        description,
        images: ogImage,
      },
      twitter: {
        title,
        description,
        images: ogImage,
      },
      keywords: generalSettings?.keywords,
    }
  } catch (error) {
    // in error case returning a base metadata object
    console.log({ error })

    return {
      title: 'Create CQL App',
      description: 'Generated by create cql app',
    }
  }
}

export const viewport: Viewport = {
  themeColor: 'dark',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const metadata = await getCachedSiteSettings()
  const generalSettings = metadata?.general

  const faviconUrl =
    typeof generalSettings?.faviconUrl === 'object'
      ? generalSettings?.faviconUrl?.url!
      : '/favicon.ico'

  return (
    <html lang='en' className=''>
      <head>
        <link rel='icon' type='image/x-icon' href={faviconUrl} />

        <GoogleAdsense metadata={metadata} />
        <GoogleAnalytics metadata={metadata} />
      </head>

      <body
        className={`${GeistSans.className} ${GeistMono.variable} antialiased`}>
        <Provider>{children}</Provider>

        {/* Sonnar toast library */}
        <Toaster richColors theme='dark' />
      </body>
    </html>
  )
}
