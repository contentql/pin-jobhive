'use client'

import { FormSubmission, Form as FormType } from '@payload-types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import Button from '@/components/common/Button'
import Spinner from '@/components/common/Spinner'
import { cn } from '@/utils/cn'
import uploadMedia from '@/utils/uploadMedia'

import { fieldsJsx } from './Fields'
import Width from './Width'

export interface Data {
  [key: string]: string | File[]
}

const Form = ({
  form,
  className = '',
}: {
  form: FormType
  className?: string
}) => {
  const router = useRouter()

  const {
    fields,
    confirmationType,
    redirect,
    confirmationMessage,
    submitButtonLabel,
    id,
  } = form

  // Building form initial values based on field type
  const buildInitialFormState = () => {
    return fields?.reduce(
      (acc, field) => {
        if ('name' in field && field.name) {
          // Handle fields that have a 'name' property
          switch (field.blockType) {
            case 'checkbox':
              acc[field.name] = field?.defaultValue || false
              break
            case 'number':
              acc[field.name] = field.defaultValue || ''
              break
            case 'text':
            case 'textarea':
              acc[field?.name] = field.defaultValue || ''
              break
            case 'select':
            case 'country':
              acc[field.name] = ''
              break
            case 'email':
              acc[field.name] = ''
              break
            case 'upload':
              acc[field.name] = []
              break
            default:
              acc[field] = ''
              break
          }
        } else if (field.blockType === 'message') {
          acc['message'] = field.message || ''
        }
        return acc
      },
      {} as Record<string, any>,
    )
  }

  // Building a zod-schema based on field type
  const formSchema = () => {
    const fieldsSchema = fields
      ? fields?.reduce(
          (acc, field) => {
            if (!field || typeof field !== 'object') return acc

            // Define Zod validation schema per field type
            switch (field.blockType) {
              case 'checkbox':
                acc[field.name] = field.required
                  ? z.boolean({
                      message: `${field.label} is required`,
                    })
                  : z.boolean().optional()
                break
              case 'number':
                acc[field.name] = field.required
                  ? z.string({
                      message: `${field.label} is required`,
                    })
                  : z.string().optional()
                break
              case 'text':
              case 'textarea':
                acc[field.name] = field.required
                  ? z.string().min(1, `${field.label} is required`)
                  : z.string().optional()
                break
              case 'select':
              case 'country':
                acc[field.name] = field.required
                  ? z.string().min(1, `${field.label} is required`)
                  : z.string().optional()
                break
              case 'email':
                acc[field.name] = field.required
                  ? z.string().email(`${field.label} must be a valid email`)
                  : z.string().optional()
                break
              case 'upload':
                acc[field.name] = field.required
                  ? z.array(
                      z.instanceof(File, {
                        message: `${field.label} is required`,
                      }),
                    )
                  : z.array(z.instanceof(File)).optional()
                break
              default:
                acc['default'] = z.string().optional() // Default case for unknown field types
                break
            }

            return acc
          },
          {} as Record<string, any>,
        )
      : {}

    return z.object(fieldsSchema)
  }

  const formMethod = useForm({
    defaultValues: buildInitialFormState(),
    // resolver: zodResolver(formSchema()),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
    getValues,
  } = formMethod

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: Data) => {
      const url = typeof window !== 'undefined' ? window.location.origin : ''

      try {
        // Creating form-submission payload, if form has images uploading them to media collection and adding them to file field
        const formattedData = await Promise.all(
          Object.entries(data).map(async ([name, value]) => {
            if (typeof value !== 'object') {
              return { field: name, value }
            }

            const imageID: any[] = []

            for await (const file of value) {
              const imageResponse = await uploadMedia(file)
              imageID.push(imageResponse.id)
            }

            return {
              field: name,
              value: '',
              file: imageID,
            }
          }),
        )

        const response = await fetch(`${url}/api/form-submissions`, {
          method: 'POST',
          body: JSON.stringify({
            form: id,
            submissionData: formattedData,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const formattedResponse = (await response.json()) as FormSubmission

        return formattedResponse
      } catch (error) {
        throw new Error('Failed to submit form, please try again!')
      }
    },
    onSuccess: () => {
      if (confirmationType === 'redirect' && redirect) {
        const { url } = redirect
        const redirectUrl = url
        if (redirectUrl) router.push(redirectUrl)
      } else if (confirmationType === 'message' && confirmationMessage)
        toast.success('🎉 Successfully submitted Form', { id: 'form-submit' })
      reset()
    },
  })

  const onsubmit = async (data: Data) => {
    mutate(data)
  }

  return (
    <FormProvider {...formMethod}>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className={cn('space-y-8', className)}>
        <div className='flex w-full flex-wrap gap-4 sm:gap-6'>
          {fields
            ? fields?.map((field, index) => {
                const Field: React.FC<any> = fieldsJsx[field?.blockType]

                if (Field) {
                  return (
                    <Width
                      key={index}
                      width={'width' in field ? field.width! : 100}>
                      <Field
                        form={form}
                        {...field}
                        {...formMethod}
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        control={control}
                        getValues={getValues}
                        required={'required' in field ? field.required : false}
                      />
                    </Width>
                  )
                }
              })
            : null}
        </div>

        <Button
          type='submit'
          className={`${isPending ? 'w-32 cursor-not-allowed opacity-50' : ''}`}
          disabled={isPending}>
          {isPending ? (
            <Spinner />
          ) : submitButtonLabel ? (
            submitButtonLabel
          ) : (
            'Submit'
          )}
          {!isPending && (
            <span className='ml-2 tracking-normal text-muted transition-transform duration-150 ease-in-out group-hover:translate-x-0.5'>
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='8'>
                <path d='m10.865.013.747.148c.243.065.481.143.716.235.495.18.97.42 1.415.716.265.192.571.343.858.55.096.064.192.135.288.209l.196.154.192.178c.09.08.175.168.254.262.189.21.33.466.414.747.076.275.073.568-.008.84-.09.27-.236.513-.427.708-.096.1-.198.191-.306.274l-.152.117-.116.074c-.369.252-.75.482-1.14.69-.577.315-1.153.585-1.701.932-.408.262-.803.549-1.182.86-.083.064-.16.136-.247.193a.918.918 0 0 1-.113.072.644.644 0 0 1-.118.016.708.708 0 0 1-.191.01.559.559 0 0 1-.246-.088l-.072-.054a1.481 1.481 0 0 1-.141-.107c-.128-.122-.1-.377.05-.726.036-.08.079-.156.128-.226l.316-.401c.164-.188.336-.372.514-.543.178-.17.356-.342.546-.493.19-.152.394-.265.59-.39.53-.329 1.05-.626 1.552-.93-.159.018-.32.034-.48.04-.511.036-1.026.044-1.546.048a43.432 43.432 0 0 1-2.31-.058l-.005-.02a78.728 78.728 0 0 0-2.292-.148c-.279-.016-.558.01-.837-.006L4.543 3.81l-.977-.046a19.357 19.357 0 0 1-.49-.029 12.6 12.6 0 0 0-1.303.013l-.828.055-.406.021H.335l-.18.008c-.145 0-.208-.15-.102-.356.16-.268.422-.46.723-.531.57-.117 1.144-.205 1.72-.264.287-.026.576-.048.865-.053.29-.004.578.01.865.042.69.065 1.408-.015 2.113-.015.776.003 1.549.02 2.324.04l1.428.039 1.087.039c.359.012.716.02 1.075.013.442-.008.879-.065 1.318-.112a3.672 3.672 0 0 0-.186-.166 9.045 9.045 0 0 0-1.06-.762 9.82 9.82 0 0 0-1.034-.537 5.9 5.9 0 0 1-1.284-.854c-.12-.115-.053-.199.12-.26a1.55 1.55 0 0 1 .738-.083Z' />
              </svg>
            </span>
          )}
        </Button>
      </form>
    </FormProvider>
  )
}

export default Form
