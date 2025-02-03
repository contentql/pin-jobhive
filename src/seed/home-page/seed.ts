import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import {
  companyImagesData,
  heroImagesData,
  homePageData,
  imageBlockImageData,
  teamImagesData,
} from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created home-page...`)

    const heroImagesSeedResult = await Promise.allSettled(
      heroImagesData.map(heroImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: heroImageData.alt,
          },
          filePath: heroImageData.filePath,
        }),
      ),
    )

    const companyImagesSeedResult = await Promise.allSettled(
      companyImagesData.map(companyImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: companyImageData.alt,
          },
          filePath: companyImageData.filePath,
        }),
      ),
    )

    const teamImagesSeedResult = await Promise.allSettled(
      teamImagesData.map(teamImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: teamImageData.alt,
          },
          filePath: teamImageData.filePath,
        }),
      ),
    )

    const imageBlockImageSeedResult = await payload.create({
      collection: 'media',
      data: { alt: imageBlockImageData?.alt },
      filePath: imageBlockImageData?.filePath,
    })

    const formattedHeroImagesSeedResult = heroImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const formattedCompanyImagesSeedResult = companyImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const formattedTeamImagesSeedResult = teamImagesSeedResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const homeResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...homePageData,
      layout: homePageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'Hero') {
          return {
            ...block,
            heroSectionImages: block.heroSectionImages?.map((image, index) => {
              const imageId = formattedHeroImagesSeedResult.at(index)?.id

              return {
                ...image,
                image: imageId as number,
              }
            }),
          }
        }

        if (block?.blockType === 'Companies') {
          return {
            ...block,
            companyLogos: block.companyLogos?.map((logo, index) => {
              const imageId = formattedCompanyImagesSeedResult.at(index)?.id

              return {
                ...logo,
                companyLogo: imageId as number,
              }
            }),
          }
        }

        if (block?.blockType === 'ImageBlock') {
          return {
            ...block,
            image: imageBlockImageSeedResult?.id,
          }
        }

        if (block?.blockType === 'Team') {
          return {
            ...block,
            team: block.team?.map((t, index) => {
              const imageId = formattedTeamImagesSeedResult.at(index)?.id

              return {
                ...t,
                image: imageId as number,
              }
            }),
          }
        }

        return block
      }),
    }

    const result = await payload.create({
      collection: 'pages',
      data: homeResult,
    })

    spinner.succeed(`Successfully created home-page`)

    return result
  } catch (error) {
    spinner.succeed(`Failed to create home-page`)

    throw error
  }
}

export default seed
