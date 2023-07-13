import { FC } from 'react'

import s from './header.module.scss'

import { Button } from 'components/ui/button'
import { Dropdown } from 'components/ui/dropdown'
import { Logo } from 'components/ui/header/logo'
import { Typography } from 'components/ui/typography'

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
