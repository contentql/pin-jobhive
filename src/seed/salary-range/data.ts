import { RequiredDataFromCollectionSlug } from 'payload'

export type salaryRangeDataType = RequiredDataFromCollectionSlug<'salaryRange'>

export const salaryRangeData: salaryRangeDataType[] = [
  {
    salaryType: 'range',
    salaryMin: 100,
    salaryMax: 500,
    _status: 'published',
  },
  {
    salaryType: 'range',
    salaryMin: 500,
    salaryMax: 1000,
    _status: 'published',
  },
  {
    salaryType: 'greaterThan',
    salaryMin: 200,
    salaryMax: null,
    _status: 'published',
  },
  {
    salaryType: 'lessThan',
    salaryMin: null,
    salaryMax: 1000,
    _status: 'published',
  },
]
