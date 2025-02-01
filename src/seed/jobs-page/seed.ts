import configPromise from '@payload-config'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { jobsPageData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora) => {
  spinner.start(`Started created jobs-page...`)

  try {
    const result = await payload.create({
      collection: 'pages',
      data: jobsPageData,
    })

    spinner.succeed(`Successfully created jobs-page...`)
    return result
  } catch (error) {
    spinner.fail(`Failed to create jobs-page...`)
    throw error
  }
}

export default seed
