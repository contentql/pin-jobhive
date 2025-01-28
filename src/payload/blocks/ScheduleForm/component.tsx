import Button from '@/components/common/Button'
import { Input } from '@/components/common/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/common/Select'

const ScheduleForm = () => {
  return (
    <div className='isolate -z-10'>
      <svg
        aria-hidden='true'
        className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'>
        <defs>
          <pattern
            x='50%'
            y={-1}
            id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
            width={200}
            height={200}
            patternUnits='userSpaceOnUse'>
            <path d='M.5 200V.5H200' fill='none' />
          </pattern>
        </defs>
        <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
          <path
            d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
            strokeWidth={0}
          />
        </svg>
        <rect
          fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
          width='100%'
          height='100%'
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden='true'
        className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'>
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
          className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'
        />
      </div>
      <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
        <div className='mx-auto mb-8 max-w-2xl lg:mx-0'>
          <h2 className='text-pretty text-4xl font-semibold tracking-tight sm:text-5xl'>
            Job Posting Schedule
          </h2>
          <p className='mt-6 text-lg/8 text-text/70'>
            Organize and streamline your hiring process by scheduling job posts
            in advance.
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <div className='w-full max-w-2xl rounded bg-foreground p-10'>
            <div className='flex flex-col gap-5 rounded bg-foreground p-5'>
              <h1 className='font-semibold'>Let&apos;s get started.</h1>
              <div className='flex flex-col gap-5'>
                <div>
                  <span>Company Name</span>
                  <span className='ml-1 text-red-500'>*</span>
                  <Input className='border-border' />
                </div>
                <div>
                  <span>Full Name</span>
                  <span className='ml-1 text-red-500'>*</span>
                  <Input className='border-border' />
                </div>
                <div>
                  <span>Email</span>
                  <span className='ml-1 text-red-500'>*</span>
                  <Input className='border-border' />
                </div>
                <div>
                  <span>What role would you like to hire?</span>
                  <span className='ml-1 text-red-500'>*</span>
                  <Select>
                    <SelectTrigger className='w-full border-border'>
                      <SelectValue placeholder='Roles' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value='london'>Developers</SelectItem>
                        <SelectItem value='losangeles'>Designers</SelectItem>
                        <SelectItem value='miami'>Project Managers</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Button>Schedule A Call</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleForm
