import configPromise from '@payload-config'
import { Ora } from 'ora'
import { RequiredDataFromCollectionSlug, getPayload } from 'payload'

import { contactPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<any> => {
  try {
    spinner.start(`Started created contact-page...`)

    const { docs: forms = [], totalDocs: formsCount } = await payload.find({
      collection: 'forms',
    })
    const contactResult: RequiredDataFromCollectionSlug<'pages'> = {
      ...contactPageData,
      layout: contactPageData?.layout?.map((block, idx) => {
        if (block?.blockType === 'Contact') {
          return {
            ...block,
            contactForm: forms.at(0)?.id as number,
          }
        }

        return block
      }),
    }

    const result = await payload.create({
      collection: 'pages',
      data: contactResult,
    })

    spinner.succeed(`Successfully created contact-page`)

    return result
  } catch (error) {
    spinner.succeed(`Failed to create contact-page`)

    throw error
  }
}

export default seed
