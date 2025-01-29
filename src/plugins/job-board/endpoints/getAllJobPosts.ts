import { Endpoint } from 'payload'

export const getAllJobPosts: Endpoint = {
  method: 'get',
  path: '/jobPosts.getAll',
  handler: async req => {
    const { payload } = req

    try {
      // Use `req.payload` to interact with the Payload CMS API
      const { docs: jobPosts } = await payload.find({
        collection: 'jobPosts',
        limit: 1000,
      })

      // Return a successful response
      return Response.json({
        success: true,
        data: jobPosts,
        message: 'Job posts retrieved successfully.',
      })
    } catch (error: any) {
      // Handle errors and return a failed response
      return Response.json(
        {
          success: false,
          error: error.message || 'An error occurred while fetching job posts.',
        },
        { status: 500 },
      )
    }
  },
}
