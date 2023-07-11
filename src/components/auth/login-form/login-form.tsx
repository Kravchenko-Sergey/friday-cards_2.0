import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import z from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckbox } from '../../ui/controlled/controlled-checkbox.tsx'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field.tsx'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

const schema = z.object({
  login: z.string().trim().nonempty('Enter login'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at latest 8 characters'),
  rememberMe: z.boolean().optional(),
})

type Form = z.infer<typeof schema>

export const LoginForm = () => {
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
          Sign In
        </Typography>
        <form onSubmit={onSubmit} className={s.form}>
          <ControlledTextField
            label="login"
            name="login"
            control={control}
            containerProps={{ className: s.textField }}
          />
          <ControlledTextField
            label="password"
            name="password"
            control={control}
            type="password"
            containerProps={{ className: s.textField }}
          />
          <ControlledCheckbox
            label="remember me"
            name="rememberMe"
            control={control}
            className={s.checkbox}
            position={'left'}
          />
          <Typography variant="Body2" as={'a'} className={s.forgotPassword}>
            Forgot password?
          </Typography>
          <Button type={'submit'} fullWidth className={s.button}>
            Sign in
          </Button>
        </form>
        <Typography variant={'Body2'} className={s.noAccount}>
          Don't have an account?
        </Typography>
        <Typography variant={'Link1'} as={Link} to={'/sign-up'} className={s.signUpLink}>
          Sign up
        </Typography>
      </div>
    </Card>
  )
}
