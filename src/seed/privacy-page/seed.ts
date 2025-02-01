import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { privacyPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created privacy-page...`)

    const privacyResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...privacyPageData,
      layout: privacyPageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'TermsOrPrivacy') {
          return {
            ...block,
          }
        }

        return block
      }),
    }
    const result = await payload.create({
      collection: 'pages',
      data: privacyResult,
    })
    spinner.succeed(`Successfully created privacy-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create privacy-page`)
    throw error
  }
}

export default seed
