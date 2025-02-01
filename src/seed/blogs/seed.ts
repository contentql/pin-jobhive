import configPromise from '@payload-config'
import { Blog } from '@payload-types'
import { Ora } from 'ora'
import { getPayload } from 'payload'

import { BlogsDataType, blogsData, blogsImagesData } from './data'

const payload = await getPayload({ config: configPromise })

const seed = async (spinner: Ora): Promise<(string | Blog)[]> => {
  try {
    spinner.start(`Started created blogs...`)

    const blogImagesResult = await Promise.allSettled(
      blogsImagesData.map(blogImageData =>
        payload.create({
          collection: 'media',
          data: {
            alt: blogImageData.alt,
          },
          filePath: blogImageData.filePath,
        }),
      ),
    )

    const formattedBlogImagesResult = blogImagesResult
      .map(result =>
        result.status === 'fulfilled'
          ? result.value
          : `Failed to seed: ${result.reason}`,
      )
      .filter(result => typeof result !== 'string')

    const { docs: authors = [], totalDocs: authorsCount } = await payload.find({
      collection: 'users',
      where: {
        role: {
          equals: 'author',
        },
      },
    })

    const formattedBlogsData: BlogsDataType[] = blogsData.map((blog, index) => {
      const formattedBlog = {
        ...blog,
        blogImage: formattedBlogImagesResult.at(index)?.id as number,
        author: blog.author?.map(() => {
          const randomNum = Math.floor(Math.random() * (authorsCount - 0)) + 0

          return {
            relationTo: 'users',
            value: authors.at(randomNum)?.id as number,
          }
        }) as Blog['author'],
      }

      return formattedBlog
    })

    const results = await Promise.allSettled(
      formattedBlogsData.map(blogData =>
        payload.create({
          collection: 'blogs',
          data: blogData,
        }),
      ),
    )

    const formattedResults = results.map(result =>
      result.status === 'fulfilled'
        ? result.value
        : `Failed to seed: ${result.reason}`,
    )
    spinner.start(`Successfully created blogs.`)
    return formattedResults
  } catch (error) {
    spinner.succeed(`Failed to create blogs`)
    throw error
  }
}

export default seed
