import { useState } from 'react'

import { ForgotPassword } from '../src/components/auth/forgot-password/forgot-password.tsx'
import { LoginForm } from '../src/components/auth/login-form'
import { RegisterForm } from '../src/components/auth/register-form'
import { Avatar } from '../src/components/ui/avatar/avatar.tsx'
import { Checkbox } from '../src/components/ui/checkbox/checkbox.tsx'
import { Dropdown } from '../src/components/ui/dropdown/dropdown.tsx'
import { Header } from '../src/components/ui/header'
import { TextField } from '../src/components/ui/textField'

import logoutIcon from './assets/dropdown/log-out-outline.svg'
import personIcon from './assets/dropdown/person-outline.svg'

export const App = () => {
  // header
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleButton = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  //
  const avatarSrc =
    'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png'
  // dropdown
  const items = [
    {
      id: '1',
      icon: personIcon,
      title: 'My Profile',
      onClick: () => {
        console.log('My Profile')
      },
    },
    {
      id: '2',
      icon: logoutIcon,
      title: 'Sign Out',
      onClick: () => {
        console.log('Sign Out')
      },
    },
  ]
  //checkbox
  const [checked, setChecked] = useState(false)
  const handleChecked = () => {
    setChecked(!checked)
  }

  return (
    <div style={{ height: 10000, backgroundColor: '#000000' }}>
      <Header
        isLoggedIn={isLoggedIn}
        handleButton={handleButton}
        name={'Sergey'}
        email={'sergey.ose.pyatigorsk@gmail.com'}
        src={avatarSrc}
        items={items}
      />
      <Avatar src={avatarSrc} />
      <Dropdown
        name={'Sergey'}
        email={'sergey.ose.pyatigorsk@gmail.com'}
        src={avatarSrc}
        items={items}
      />
      <TextField label={'input'} type="password" />
      <Checkbox checked={checked} onChange={handleChecked} />
      <LoginForm />
      <RegisterForm />
      <ForgotPassword />
    </div>
  )
}
