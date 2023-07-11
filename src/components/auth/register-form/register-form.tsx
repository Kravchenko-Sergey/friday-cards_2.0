import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import z from 'zod'

import s from '../../../../src/components/auth/login-form/login-form.module.scss'
import { Button } from '../../../../src/components/ui/button'
import { Card } from '../../../../src/components/ui/card'
import { ControlledTextField } from '../../../../src/components/ui/controlled'
import { Typography } from '../../../../src/components/ui/typography'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at latest 8 characters'),
  confirmPassword: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at latest 8 characters')
    .refine(val => val === 'password', {
      message: 'Passwords do not match',
    }),
})

type Form = z.infer<typeof schema>

export const RegisterForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Form>({ resolver: zodResolver(schema), mode: 'onSubmit' })

  console.log(errors)

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Card>
      <div className={s.card}>
        <Typography variant={'Large'} as={'h1'} className={s.title}>
          Sign Up
        </Typography>
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledTextField
            label="Email"
            name="login"
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledTextField
            label="Password"
            name="password"
            control={control}
            type="password"
            containerProps={{ className: s.textField }}
          />
          <ControlledTextField
            label="Confirm Password"
            name="confirmPassword"
            control={control}
            type="password"
            containerProps={{ className: s.textField }}
          />
          <Button type={'submit'} fullWidth className={s.button}>
            Sign up
          </Button>
        </form>
        <Typography variant={'Body2'} className={s.noAccount}>
          Already have an account?
        </Typography>
        <Typography variant={'Link1'} as={Link} to={'/sign-up'} className={s.signUpLink}>
          Sign in
        </Typography>
      </div>
    </Card>
  )
}
