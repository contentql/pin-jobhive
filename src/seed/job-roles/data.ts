import { RequiredDataFromCollectionSlug } from 'payload'

export type JobRolesDataType = RequiredDataFromCollectionSlug<'jobRoles'>

export const jobRolesData: JobRolesDataType[] = [
  {
    title: 'Fontend-Developer',
    _status: 'published',
  },
  {
    title: 'Designer',
    _status: 'published',
  },
]
