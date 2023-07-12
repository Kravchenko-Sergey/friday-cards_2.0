import { FC, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

import { LogOutOutline } from '../../../../src/assets/dropdown/logOutOutline.tsx'
import { Avatar } from '../../../../src/components/ui/avatar/avatar.tsx'
import { Card } from '../../../../src/components/ui/card'
import { ControlledTextField } from '../../../../src/components/ui/controlled'
import { Button, Typography } from '../../../../src/components/ui/typography'
import img from '../../../assets/edit-2-outline.svg'
import avatarImg from '../../../assets/Ellipse 45.svg'

import s from './profile.module.scss'

type ProfileProps = {
  name: string
  email: string
}

const schema = z.object({
  nickName: z.string().trim().nonempty('Enter name'),
})

export const Profile: FC<ProfileProps> = ({ name, email }) => {
  const [showTextField, setShowTextField] = useState(false)

  const handleChangeName = () => {
    setShowTextField(true)
  }

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
        <Typography variant="Large" className={s.title}>
          Personal Information
        </Typography>
        <div className={s.imgBlock}>
          <Avatar src={avatarImg} size={96} />
          <Button variant="secondary" as="img" src={img} alt="img" className={s.img} />
        </div>
        {!showTextField ? (
          <>
            <Typography variant="Body2" className={s.name}>
              {name} <img src={img} alt="img" onClick={handleChangeName} />
            </Typography>
            <Typography variant="Body2" className={s.email}>
              {email}
            </Typography>
            <Button variant="secondary">
              <LogOutOutline /> Logout
            </Button>
          </>
        ) : (
          <form onSubmit={onSubmit} className={s.form}>
            <ControlledTextField
              label="Nickmame"
              name="login"
              control={control}
              containerProps={{ className: s.textField }}
            />
            <Button fullWidth className={s.button}>
              Save Changes
            </Button>
          </form>
        )}
      </div>
    </Card>
  )
}
