import { Params } from '../types'
import { ValuesType } from '@payload-types'
import React from 'react'

interface ValuesProps extends ValuesType {
  params: Params
}
const Values: React.FC<ValuesProps> = ({ params, ...block }) => {
  return (
    <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:mx-0'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight sm:text-5xl'>
          {block.heading}
        </h2>
        <p className='mt-6 text-lg/8 text-text/70'>{block?.description}</p>
      </div>
      <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
        {block?.values?.map((value, index) => (
          <div key={index}>
            <dt className='font-semibold'>{value?.title}</dt>
            <dd className='mt-1 text-text/70'>{value?.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Values
