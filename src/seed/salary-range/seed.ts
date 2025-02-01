import configPromise from '@payload-config'
import { SalaryRange } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { salaryRangeData, salaryRangeDataType } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | SalaryRange)[]> => {
  try {
    spinner.start(`Started created salary-range...`)

    const formattedSalaryRangeData: salaryRangeDataType[] = salaryRangeData.map(
      salaryRange => salaryRange,
    )

    const results = await Promise.allSettled(
      formattedSalaryRangeData.map(salaryRange =>
        payload.create({
          collection: 'salaryRange',
          data: salaryRange,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created salary-range`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create salary-range`)
    throw error
  }
}

export default seed
