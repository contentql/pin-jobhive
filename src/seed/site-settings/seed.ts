import { collectionSlug } from '@contentql/core'
import configPromise from '@payload-config'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import {
  siteSettingsData,
  siteSettingsDataType,
  siteSettingsImages,
} from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora) => {
  try {
    spinner.start(`Started created site-settings...`)
    const { docs: pages } = await payload.find({
      collection: collectionSlug['pages'],
      where: {
        slug: {
          in: ['jobs', 'blogs', 'terms', 'privacy'],
        },
      },
    })

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
        menuLinks: siteSettingsData.navbar.menuLinks
          ?.slice(0, 2)
          ?.map((menuLinkData, idx) => {
            const linkedPage = pages.find(
              page =>
                page.title.toLowerCase() ===
                menuLinkData.menuLink?.label.toLowerCase(),
            )

            return {
              ...menuLinkData,
              menuLink: {
                ...menuLinkData.menuLink,
                label: menuLinkData.menuLink?.label as string,
                page: {
                  relationTo: 'pages',
                  value: linkedPage?.id as number,
                },
              },
            }
          }),
      },
      footer: {
        ...siteSettingsData.footer,
        logo: {
          ...siteSettingsData.footer.logo,
          imageUrl: formattedImagesResult.at(0)?.id as number,
        },
        footerLinks: siteSettingsData.navbar.menuLinks
          ?.slice(2, 4)
          ?.map((menuLinkData, idx) => {
            const linkedPage = pages.find(
              page =>
                page.title.toLowerCase() ===
                menuLinkData.menuLink?.label.toLowerCase(),
            )

            return {
              ...menuLinkData,
              menuLink: {
                ...menuLinkData.menuLink,
                label: menuLinkData.menuLink?.label as string,
                page: {
                  relationTo: 'pages',
                  value: linkedPage?.id as number,
                },
              },
            }
          }),
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
