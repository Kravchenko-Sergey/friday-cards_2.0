import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import z from 'zod'

import { Button } from '../../../../src/components/ui/button'
import { Card } from '../../../../src/components/ui/card'
import { ControlledTextField } from '../../../../src/components/ui/controlled'
import { Typography } from '../../../../src/components/ui/typography'

import s from './forgot-password.module.scss'

const schema = z.object({
  email: z.string().trim().nonempty('Enter email'),
})

export const ForgotPassword = () => {
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
        <Typography variant={'Large'} as={'h1'} className={s.title}>
          Sign In
        </Typography>
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledTextField
            label="Email"
            name="email"
            control={control}
            containerProps={{ className: s.textField }}
          />
          <Typography variant={'Body1'} className={s.description}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
          <Button variant={'primary'} fullWidth className={s.button}>
            Send Instructions
          </Button>
        </form>
        <Typography className={s.rememberPassword}>Did you remember your password?</Typography>
        <Typography variant={'Link1'} as={Link} to={''} className={s.tryLoggingInLink}>
          Try logging in
        </Typography>
      </div>
    </Card>
  )
}
