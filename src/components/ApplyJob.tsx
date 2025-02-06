import Form from '@/payload/blocks/Form/Components/Form'

import Button from './common/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './common/Dialog'

const ApplyJob = ({
  formData,
  disableButton,
}: {
  formData: any
  disableButton: boolean
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disableButton}>Apply Now</Button>
      </DialogTrigger>
      <DialogContent className=''>
        <DialogHeader>
          <DialogTitle>Apply for this Job</DialogTitle>
          <DialogDescription>
            Fill in your details and upload your resume to apply for this
            position. Our team will review your application and get back to you
            soon.
          </DialogDescription>
        </DialogHeader>

        <Form form={formData} />
      </DialogContent>
    </Dialog>
  )
}

export default ApplyJob
