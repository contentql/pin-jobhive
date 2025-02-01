import configPromise from '@payload-config'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { jobDetailsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora) => {
  spinner.start(`Started created job-details-page...`)

  try {
    const result = await payload.create({
      collection: 'pages',
      data: jobDetailsPageData,
    })

    spinner.succeed(`Successfully created job-details-page...`)
    return result
  } catch (error) {
    spinner.fail(`Failed creating job-details-page...`)
    throw error
  }
}

export default seed
