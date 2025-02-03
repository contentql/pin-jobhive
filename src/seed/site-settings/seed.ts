import { collectionSlug } from '@contentql/core'
import configPromise from '@payload-config'
import { Page } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import {
  siteSettingsData,
  siteSettingsDataType,
  siteSettingsImages,
} from './data'

const payload = await getPayload({ config: configPromise })

const seed = async ({
  jobsPage,
  spinner,
  blogsPage,
  termsPage,
  privacy,
}: {
  spinner: Ora
  blogsPage: Page
  jobsPage: Page
  termsPage: Page
  privacy: Page
}) => {
  try {
    spinner.start(`Started created site-settings...`)

    const siteSettingsImageSeedResult = await Promise.allSettled(
      siteSettingsImages.map(image =>
        payload.create({
          collection: 'media',
          data: {
            alt: image.alt,
          },
          filePath: image.filePath,
        }),
      ),
    )

    const formattedImagesResult = siteSettingsImageSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const formattedSiteSettingsData: siteSettingsDataType = {
      ...siteSettingsData,
      general: {
        ...siteSettingsData.general,
        faviconUrl: formattedImagesResult.at(0)?.id as number,
        ogImageUrl: formattedImagesResult.at(0)?.id as number,
      },
      navbar: {
        ...siteSettingsData.navbar,
        logo: {
          ...siteSettingsData.navbar.logo,
          imageUrl: formattedImagesResult.at(0)?.id as number,
        },
        menuLinks: [
          {
            group: false,
            menuLink: {
              type: 'reference',
              label: 'Jobs',
              page: {
                relationTo: 'pages',
                value: jobsPage.id,
              },
            },
          },
          {
            group: false,
            menuLink: {
              type: 'reference',
              label: 'Blogs',
              page: {
                relationTo: 'pages',
                value: blogsPage.id,
              },
            },
          },
        ],
      },
      footer: {
        ...siteSettingsData.footer,
        logo: {
          ...siteSettingsData.footer.logo,
          imageUrl: formattedImagesResult.at(0)?.id as number,
        },
        footerLinks: [
          {
            group: false,
            menuLink: {
              type: 'reference',
              label: 'Terms',
              page: {
                relationTo: 'pages',
                value: termsPage.id,
              },
            },
          },
          {
            group: false,
            menuLink: {
              type: 'reference',
              label: 'Privacy',
              page: {
                relationTo: 'pages',
                value: privacy.id,
              },
            },
          },
        ],
      },
    }

    const result = await payload.updateGlobal({
      slug: collectionSlug['site-settings'],
      data: formattedSiteSettingsData,
    })

    spinner.succeed(`Successfully created site-settings`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create site-settings`)
    throw error
  }
}

export default seed
