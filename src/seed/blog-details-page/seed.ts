import configPromise from '@payload-config'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { blogDetailsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora) => {
  spinner.start(`Started created blogs-details-page...`)

  try {
    const result = await payload.create({
      collection: 'pages',
      data: blogDetailsPageData,
    })

    spinner.succeed(`Successfully created blogs-details-page...`)
    return result
  } catch (error) {
    spinner.fail(`Failed creating blogs-details-page...`)
    throw error
  }
}

export default seed
