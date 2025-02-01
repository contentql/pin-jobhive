import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { termsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created terms-page...`)

    const termsResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...termsPageData,
      layout: termsPageData?.layout?.map((block, idx) => {
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
      data: termsResult,
    })
    spinner.succeed(`Successfully created terms-page`)
    return result
  } catch (error) {
    spinner.succeed(`Failed to create terms-page`)
    throw error
  }
}

export default seed
