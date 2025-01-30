import { Endpoint } from 'payload'

export const postScheduleCall: Endpoint = {
  method: 'post',
  path: '/scheduleCall.create',
  handler: async req => {
    try {
      // Ensure `json` method exists on the request
      const body = req.json ? await req.json() : {}

      const { company, name, email, role } = body

      // Validate required fields
      if (!company || !name || !email || !role) {
        return Response.json(
          {
            success: false,
            message:
              'Missing required fields. Please provide all necessary data.',
          },
          { status: 400 },
        )
      }

      // Insert data into the Payload CMS
      const scheduleCall = await req.payload.create({
        collection: 'scheduleCall',
        data: {
          company,
          name,
          email,
          role,
        },
      })

      // Return a successful response
      return Response.json({
        success: true,
        data: scheduleCall,
        message: 'Schedule call created successfully.',
      })
    } catch (error: any) {
      // Handle errors and return a failed response
      return Response.json(
        {
          success: false,
          error:
            error.message ||
            'An error occurred while creating the schedule call.',
        },
        { status: 500 },
      )
    }
  },
}
