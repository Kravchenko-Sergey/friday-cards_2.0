import { FC } from 'react'

import { Card } from '../../../../src/components/ui/card'
import { Typography } from '../../../../src/components/ui/typography'
import img from '../../../assets/Group 281.svg'
import { Button } from '../../../components/ui/button'

import s from './check-email.module.scss'

type CheckEmailProps = {
  email: string
}

export const CheckEmail: FC<CheckEmailProps> = ({ email }) => {
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
        <Button fullWidth>Back to Sign In</Button>
      </div>
    </Card>
  )
}
