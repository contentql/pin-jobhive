import { Params } from '../types'
import configPromise from '@payload-config'
import { ListType } from '@payload-types'
import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'
import React from 'react'

import AllBlogs from './components/AllBlogs'
import AuthorsList from './components/AuthorsList'
import JobsList from './components/JobsList'
import TagsList from './components/TagsList'

interface ListProps extends ListType {
  params: Params
}

const List: React.FC<ListProps> = async ({ params, ...block }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const siteData = await payload.findGlobal({
    slug: 'site-settings',
    draft: false,
  })

  switch (block?.collectionSlug) {
    case 'blogs': {
      const { docs: blogs = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'blogs'],
        { tags: ['list-blogs'] },
      )()

      return <AllBlogs blogs={blogs} title={block['title'] || 'Blogs'} />
    }

    case 'tags': {
      const { docs: tags = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'tags',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'tags'],
        { tags: ['list-tags'] },
      )()

      const { docs: blogs } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'blogs',
            limit: 1000,
            select: {
              tags: true,
            },
            populate: {
              tags: {
                slug: true,
              },
            },
          }),
        ['list', 'tags', 'with-blog-count'],
        { tags: ['list-tags-with-blog-count'] },
      )()

      const tagsWithCount = tags.map(tag => {
        const count = blogs.filter(blog => {
          const blogTags = blog.tags

          if (blogTags) {
            return blogTags.find(({ value }) => {
              if (typeof value === 'number') {
                return value === tag.id
              } else {
                return value.id === tag.id
              }
            })
          }
        }).length

        return { ...tag, count }
      })

      return <TagsList tags={tagsWithCount} title={block?.title || ''} />
    }

    case 'users': {
      const { docs: authors = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'users',
            where: {
              role: {
                equals: 'author',
              },
            },
            limit: 1000,
          }),
        ['list', 'authors'],
        { tags: ['list-authors'] },
      )()

      return (
        <AuthorsList
          authors={authors.map(author => ({ ...author, count: 0 }))}
          block={block}
        />
      )
    }

    case 'jobPosts': {
      const { docs: jobs = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'jobPosts',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'jobPosts'],
        { tags: ['list-jobPosts'] },
      )()

      const { docs: jobRoles = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'jobRoles',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'jobRoles'],
        { tags: ['list-jobRoles'] },
      )()

      const { docs: salaryRange = [] } = await unstable_cache(
        async () =>
          await payload.find({
            collection: 'salaryRange',
            depth: 5,
            draft: false,
            limit: 1000,
          }),
        ['list', 'salaryRange'],
        { tags: ['list-salaryRange'] },
      )()

      return (
        <JobsList
          jobs={jobs}
          jobRoles={jobRoles}
          salaryRange={salaryRange}
          title={block['title'] || 'Job Roles'}
          siteData={siteData}
        />
      )
    }
  }
}

export default List
