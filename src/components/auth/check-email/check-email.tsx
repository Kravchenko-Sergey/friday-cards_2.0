import { FC } from 'react'

import s from './check-email.module.scss'

import img from 'assets/Group 281.svg'
import { Button } from 'components/ui/button'
import { Card } from 'components/ui/card'
import { Typography } from 'components/ui/typography'

type CheckEmailProps = {
  email: string
  handleButton: () => void
}

export const CheckEmail: FC<CheckEmailProps> = ({ email, handleButton }) => {
  return (
    <Card>
      <div className={s.card}>
        <Typography variant={'Large'} className={s.title}>
          Check Email
        </Typography>
        <img src={img} alt="img" className={s.img} />
        <Typography className={s.description}>
          We’ve sent an Email with instructions to {email}
        </Typography>
        <Button onClick={handleButton} fullWidth>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
