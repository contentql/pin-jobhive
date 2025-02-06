import { RequiredDataFromCollectionSlug } from 'payload'

export type salaryRangeDataType = RequiredDataFromCollectionSlug<'salaryRange'>

export const salaryRangeData: salaryRangeDataType[] = [
  {
    salaryType: 'range',
    salaryMin: 5000,
    salaryMax: 10000,
    _status: 'published',
  },
  {
    salaryType: 'range',
    salaryMin: 2000,
    salaryMax: 5000,
    _status: 'published',
  },
  {
    salaryType: 'range',
    salaryMin: 100,
    salaryMax: 2000,
    _status: 'published',
  },
  {
    salaryType: 'lessThan',
    salaryMin: null,
    salaryMax: 10000,
    _status: 'published',
  },
  {
    salaryType: 'greaterThan',
    salaryMin: 100,
    salaryMax: null,
    _status: 'published',
  },
]
