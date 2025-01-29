import type { Config, Plugin } from 'payload'

import { JobPosts } from './collections/JobPosts'
import { JobRoles } from './collections/JobRoles'
import { JobTypes } from './collections/JobTypes'
import { SalaryRange } from './collections/SalaryRange'
import { ScheduleCall } from './collections/ScheduleCall'
import { getAllJobPosts } from './endpoints/getAllJobPosts'
import { postScheduleCall } from './endpoints/postScheduleCall'
import { PluginTypes } from './types'

const jobBoard =
  (options: PluginTypes = {}): Plugin =>
  (incomingConfig: Config): Config => {
    const { enabled = true } = options

    if (!enabled) {
      return incomingConfig
    }

    return {
      ...incomingConfig,
      collections: [
        ...(incomingConfig.collections || []),
        JobPosts,
        ScheduleCall,
        JobTypes,
        JobRoles,
        SalaryRange,
      ],
      endpoints: [getAllJobPosts, postScheduleCall],
    }
  }

export default jobBoard
