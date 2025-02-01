import configPromise from '@payload-config'
import { JobType } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { JobTypesDataType, jobTypesData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | JobType)[]> => {
  try {
    spinner.start(`Started created job-types...`)

    const formattedJobTypesData: JobTypesDataType[] = jobTypesData.map(
      jobType => jobType,
    )

    const results = await Promise.allSettled(
      formattedJobTypesData.map(jobTypesData =>
        payload.create({
          collection: 'jobTypes',
          data: jobTypesData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created job-types`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create job-types`)
    throw error
  }
}

export default seed
