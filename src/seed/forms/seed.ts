import configPromise from '@payload-config'
import { Form } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { FormsDataType, formsData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | Form)[]> => {
  try {
    spinner.start(`Started created forms...`)

    const formattedFormsData: FormsDataType[] = formsData.map(form => form)

    const results = await Promise.allSettled(
      formattedFormsData.map(formData =>
        payload.create({
          collection: 'forms',
          data: formData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created forms.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create forms`)
    throw error
  }
}

export default seed
