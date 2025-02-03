import BlogCardLoading from '../../List/components/BlogCardLoading'
import BlogsList from '../../List/components/BlogsList'
import { Blog, User } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import { logoMapping } from '@/utils/logoMapping'

import NoPostsFound from './NoPostsFound'

interface AuthorDetailsProps {
  blogsData?: Blog[]
  author: User
  blogsLoading?: boolean
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({
  blogsData,
  author,
  blogsLoading,
}) => {
  const authorDetails = {
    image:
      typeof author.imageUrl === 'object'
        ? {
            url: author.imageUrl?.url!,
            alt: author.imageUrl?.alt,
          }
        : undefined,
    name: author.displayName || author.username,
    socialLinks: author.socialLinks || [],
    username: author.username!,
  }

  return (
    <>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-secondary relative aspect-[9/16] h-full max-h-80 w-full overflow-hidden rounded'>
          {authorDetails.image && (
            <Image
              alt={`${authorDetails.image.alt}`}
              src={authorDetails.image.url}
              fill
              sizes='800px'
              className='h-full w-full animate-image-blur object-cover'
            />
          )}
        </div>

        <div className='flex flex-col justify-center lg:col-span-3'>
          <h3 className='text-xl font-semibold'>{authorDetails.name}</h3>

          <div className='mt-4 flex flex-wrap items-center gap-3'>
            {authorDetails.socialLinks.length
              ? authorDetails.socialLinks.map(({ platform, value }) => {
                  const Element = logoMapping[platform]
                  return (
                    <Link
                      target='_blank'
                      className='bg-secondary/20 hover:bg-secondary/30 flex items-center gap-2 rounded-md px-3 py-2 text-sm capitalize'
                      href={value}
                      key={platform}>
                      <Element className='size-5' />
                      {platform}
                    </Link>
                  )
                })
              : null}
          </div>
        </div>
      </div>

      {blogsLoading ? (
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {[1, 2, 3].map(i => (
            <BlogCardLoading key={i} />
          ))}
        </div>
      ) : (
        <>
          {blogsData ? (
            <BlogsList title='Posts' blogs={blogsData} />
          ) : (
            <NoPostsFound />
          )}
        </>
      )}
    </>
  )
}

export default AuthorDetails
