import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { Card } from '../../../../src/components/ui/card'
import { ControlledTextField } from '../../../../src/components/ui/controlled'
import { Typography } from '../../../../src/components/ui/typography'
import { Button } from '../../../components/ui/button'

import s from './create-new-password.module.scss'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at latest 8 characters'),
  rememberMe: z.boolean().optional(),
})

export const CreateNewPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: 'onSubmit' })

  console.log(errors)

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Card>
      <div className={s.card}>
        <Typography variant={'Large'} className={s.title}>
          Create new password
        </Typography>
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledTextField
            label="password"
            name="password"
            control={control}
            type="password"
            containerProps={{ className: s.textField }}
          />
          <Typography className={s.description}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth>Create New Password</Button>
        </form>
      </div>
    </Card>
  )
}
