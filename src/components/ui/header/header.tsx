import { useState } from 'react'

import { Link } from 'react-router-dom'

import { Avatar } from '../avatar/avatar.tsx'
import { Button } from '../button'
import { Typography } from '../typography'

import s from './header.module.scss'
import { Logo } from './logo/logo.tsx'

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const handleButton = () => {
    console.log('Subtile2')
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to={'/'}>
          <Logo />
        </Link>
        {!isLoggedIn && (
          <Button onClick={handleButton} variant="primary">
            <Typography variant="Subtitle2" className={s.text}>
              Sign In
            </Typography>
          </Button>
        )}
        {isLoggedIn && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Button variant={'link'} as={'a'} className={s.name}>
              <Typography variant={'Subtitle1'} className={s.text}>
                Sergey
              </Typography>
            </Button>
            <Avatar
              name={'Sergey'}
              src={
                'data:image/png;base64,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'
              }
            />
          </div>
        )}
      </div>
    </header>
  )
}
