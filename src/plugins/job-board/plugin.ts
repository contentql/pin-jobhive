import type { Config, Plugin } from 'payload'

import { JobPosts } from './collections/JobPosts'
import { JobRoles } from './collections/JobRoles'
import { JobTypes } from './collections/JobTypes'
import { SalaryRange } from './collections/SalaryRange'
import { getAllJobPosts } from './endpoints/getAllJobPosts'
import { getAllJobRoles } from './endpoints/getAllJobRoles'
import { getAllJobTypes } from './endpoints/getAllJobTypes'
import { getAllSalaryRange } from './endpoints/getAllSalaryRange'
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
        JobTypes,
        JobRoles,
        SalaryRange,
      ],
      endpoints: [
        getAllJobPosts,
        getAllJobTypes,
        getAllJobRoles,
        getAllSalaryRange,
      ],
    }
  }

export default jobBoard
