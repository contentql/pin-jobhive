import configPromise from '@payload-config'
import { JobRole } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { JobRolesDataType, jobRolesData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | JobRole)[]> => {
  try {
    spinner.start(`Started created job-roles...`)

    const formattedJobRolesData: JobRolesDataType[] = jobRolesData.map(
      jobRole => jobRole,
    )

    const results = await Promise.allSettled(
      formattedJobRolesData.map(jobRolesData =>
        payload.create({
          collection: 'jobRoles',
          data: jobRolesData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created job-role.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create job-role`)
    throw error
  }
}

export default seed
