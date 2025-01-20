import { Params } from '../types'
import { ContentType } from '@payload-types'

interface ContentProps extends ContentType {
  params: Params
}
const Content: React.FC<ContentProps> = ({ params, ...block }) => {
  return (
    <div className='mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
          {block?.heading}
        </h2>
        <div className='mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row'>
          <div className='lg:w-full lg:max-w-2xl lg:flex-auto'>
            <p className='text-xl/8 text-gray-600'>{block?.description}</p>
          </div>
          <div className='lg:flex lg:flex-auto lg:justify-center'>
            <dl className='w-64 space-y-8 xl:w-80'>
              {block?.contentDetails?.map((detail, index) => (
                <div key={index} className='flex flex-col-reverse gap-y-4'>
                  <dt className='text-base/7 text-gray-600'>
                    {detail?.subtitle}
                  </dt>
                  <dd className='text-5xl font-semibold tracking-tight text-gray-900'>
                    {detail?.title}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
