import path from 'path'
import { RequiredDataFromCollectionSlug } from 'payload'
import process from 'process'

export type AuthorDataType = RequiredDataFromCollectionSlug<'users'>

export const authorsImageList = [
  {
    name: 'john',
    imageURL: path.join(process.cwd(), '/public/images/seed/john.png'),
    alt: 'john avatar image',
  },
]

export const authorsData: AuthorDataType[] = [
  {
    displayName: 'John',
    username: 'john',
    email: 'john@gmail.com',
    password: '123456',
    role: ['user', 'author'],
    emailVerified: new Date().toISOString(),
    _verified: true,
  },
]
