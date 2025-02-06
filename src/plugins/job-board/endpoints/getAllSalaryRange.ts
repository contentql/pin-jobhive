import { Endpoint } from 'payload'

export const getAllSalaryRange: Endpoint = {
  method: 'get',
  path: '/salaryRange.getAll',
  handler: async req => {
    const { payload } = req

    try {
      // Use `req.payload` to interact with the Payload CMS API
      const { docs: jobRoles } = await payload.find({
        collection: 'jobRoles',
        limit: 1000,
      })

      // Return a successful response
      return Response.json({
        success: true,
        data: jobRoles,
        message: 'Salary range retrieved successfully.',
      })
    } catch (error: any) {
      // Handle errors and return a failed response
      return Response.json(
        {
          success: false,
          error:
            error.message || 'An error occurred while fetching salary range.',
        },
        { status: 500 },
      )
    }
  },
}
