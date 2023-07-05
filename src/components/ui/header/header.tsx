import { FC } from 'react'

import { Button } from '../button'
import { Dropdown } from '../dropdown/dropdown.tsx'
import { Typography } from '../typography'

import s from './header.module.scss'
import { Logo } from './logo/logo.tsx'

type MenuItem = {
  id: string
  icon?: string
  title: string
  onClick?: () => void
}

type HeaderProps = {
  isLoggedIn: boolean
  handleButton: () => void
  name: string
  email: string
  src: string
  items: MenuItem[]
}

export const Header: FC<HeaderProps> = ({ isLoggedIn, handleButton, name, email, src, items }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        {!isLoggedIn && (
          <Button onClick={handleButton} variant="primary">
            <Typography variant="Subtitle2" className={s.text}>
              Sign In
            </Typography>
          </Button>
        )}
        {isLoggedIn && <Dropdown name={name} email={email} src={src} items={items} />}
      </div>
    </header>
  )
}
