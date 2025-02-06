import { Endpoint } from 'payload'

export const getAllJobTypes: Endpoint = {
  method: 'get',
  path: '/jobTypes.getAll',
  handler: async req => {
    const { payload } = req

    try {
      // Use `req.payload` to interact with the Payload CMS API
      const { docs: jobTypes } = await payload.find({
        collection: 'jobTypes',
        limit: 1000,
      })

      // Return a successful response
      return Response.json({
        success: true,
        data: jobTypes,
        message: 'Job types retrieved successfully.',
      })
    } catch (error: any) {
      // Handle errors and return a failed response
      return Response.json(
        {
          success: false,
          error: error.message || 'An error occurred while fetching job types.',
        },
        { status: 500 },
      )
    }
  },
}
