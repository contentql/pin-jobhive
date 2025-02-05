import Form from '../Form/Components/Form'
import { Params } from '../types'
import { ContactType, Form as FormType } from '@payload-types'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

interface ContactProps extends ContactType {
  params: Params
}

const Contact: React.FC<ContactProps> = ({ params, ...block }) => {
  console.log('formData', block?.contactForm)

  return (
    <div className=' isolate -z-10 mt-7 sm:mt-12'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-pretty text-4xl font-semibold tracking-tight sm:text-5xl'>
          Contact Us
        </h2>

        {/* Contact Info Section */}
        <div className='mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col'>
            <div className='mb-4 text-primary'>
              <MapPin size={51} />
            </div>
            <h3 className='text-lg font-semibold'>Address</h3>
            <p className='text-text/70'>{block?.address}</p>
          </div>
          <div className='flex flex-col'>
            <div className='mb-4 text-primary'>
              <Phone size={51} />
            </div>
            <h3 className='text-lg font-semibold'>Call Us</h3>
            <p className='text-text/70'>{block?.contactNumber}</p>
          </div>
          <div className='flex flex-col'>
            <div className='mb-4 text-primary'>
              <Mail size={51} />
            </div>
            <h3 className='text-lg font-semibold'>Email</h3>
            <p className='text-text/70'>{block?.mail}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className='mt-14 flex w-full justify-center'>
          <div className='w-full max-w-2xl rounded bg-foreground p-6 shadow-lg sm:p-8'>
            <Form form={block.contactForm as FormType} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
