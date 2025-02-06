import configPromise from '@payload-config'
import { JobPost } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { JobPostsDataType, jobImagesData, jobPostsData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | JobPost)[]> => {
  try {
    spinner.start(`Started created job-posts...`)

    const jobImagesResult = await Promise.allSettled(
      jobImagesData.map(jobImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: jobImageData.alt,
          },
          filePath: jobImageData.filePath,
        }),
      ),
    )

    const formattedJobsImagesResult = jobImagesResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const { docs: jobRoles = [], totalDocs: rolesCount } = await payload.find({
      collection: 'jobRoles',
    })

    const { docs: jobTypes = [], totalDocs: jobTypeCount } = await payload.find(
      {
        collection: 'jobTypes',
      },
    )

    const { docs: forms = [], totalDocs: formsCount } = await payload.find({
      collection: 'forms',
    })

    const formattedJobsData: JobPostsDataType[] = jobPostsData.map(
      (job, index) => {
        return {
          ...job,
          company: {
            ...job.company,
            logo: formattedJobsImagesResult?.at(index)?.id as number,
          },
          jobDetails: {
            ...job.jobDetails,
            roles: job.jobDetails.roles.map((_, index) => {
              const randomNum = Math.floor(Math.random() * 11)

              return jobRoles.at(randomNum)?.id as number
            }),
            type: jobTypes.at(index)?.id as number,
          },
          application: {
            ...job.application,
            internalForm: forms.at(index + 1)?.id as number,
          },
        }
      },
    )

    const results = await Promise.allSettled(
      formattedJobsData.map(jobData =>
        payload.create({
          collection: 'jobPosts',
          data: jobData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created job-posts.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create job-posts`)
    throw error
  }
}

export default seed
