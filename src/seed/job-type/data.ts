import { RequiredDataFromCollectionSlug } from 'payload'

export type JobTypesDataType = RequiredDataFromCollectionSlug<'jobTypes'>

export const jobTypesData: JobTypesDataType[] = [
  {
    title: 'Contract',
    _status: 'draft',
  },
  {
    title: 'Freelance',
    _status: 'draft',
  },
  {
    title: 'Part-Time',
    _status: 'published',
  },
  {
    title: 'Full-Time',
    _status: 'published',
  },
]
