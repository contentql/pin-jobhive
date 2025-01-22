'use client'

import { Params } from '../types'
import { BlogPostsType, Media, User } from '@payload-types'
import { format } from 'date-fns'
import Image from 'next/image'

import { trpc } from '@/trpc/client'

interface BlogPostsProps extends BlogPostsType {
  params: Params
}
const BlogPosts: React.FC<BlogPostsProps> = ({ params, ...block }) => {
  const { data: blogData } = trpc.blog.getAllBlogs.useQuery()
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <h2 className='text-balance text-4xl font-semibold tracking-tight sm:text-5xl'>
          {block?.heading}
        </h2>
        <p className='mt-2 text-lg/8 text-text/70'>{block?.description}</p>
      </div>
      <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {blogData?.slice(0, 3)?.map((post, index) => {
          let date = format(new Date(post?.createdAt), 'MMM dd, yyyy')
          return (
            <article
              key={index}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
              <Image
                height={1000}
                width={1000}
                alt={(post?.blogImage as Media)?.alt || 'Blog Image'}
                src={(post?.blogImage as Media)?.url!}
                className='absolute inset-0 -z-10 size-full object-cover'
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

              <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300'>
                <time dateTime={date} className='mr-8'>
                  {date}
                </time>
                <div className='-ml-4 flex items-center gap-x-4'>
                  <svg
                    viewBox='0 0 2 2'
                    className='-ml-0.5 size-0.5 flex-none fill-white/50'>
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className='flex gap-x-2.5'>
                    {post?.author?.map((author, index) => {
                      const user = author?.value as User
                      const imageUrl = (user?.imageUrl as Media)?.url

                      return (
                        <div key={index} className='flex items-center gap-x-2'>
                          <Image
                            height={1000}
                            width={1000}
                            alt={user?.username || "Author's image"}
                            src={imageUrl!}
                            className='size-6 flex-none rounded-full bg-white/10'
                          />
                          <span>{user?.username || 'Unknown Author'}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <h3 className='mt-3 text-lg/6 font-semibold text-white'>
                <a href={`/blog/${post.slug}`}>
                  <span className='absolute inset-0' />
                  {post?.title}
                </a>
              </h3>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPosts
