import { useState } from 'react'

import logoutIcon from 'assets/dropdown/log-out-outline.svg'
import personIcon from 'assets/dropdown/person-outline.svg'
import { CheckEmail } from 'components/auth/check-email'
import { CreateNewPassword } from 'components/auth/create-new-password'
import { ForgotPassword } from 'components/auth/forgot-password'
import { LoginForm } from 'components/auth/login-form'
import { Profile } from 'components/auth/profile'
import { RegisterForm } from 'components/auth/register-form'
import { Avatar } from 'components/ui/avatar'
import { Checkbox } from 'components/ui/checkbox'
import { Dropdown } from 'components/ui/dropdown'
import { Header } from 'components/ui/header'
import { Slider } from 'components/ui/slider'
import { TabSwitcher } from 'components/ui/tabSwitcher'
import { TextField } from 'components/ui/textField'

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
  //check email
  const handleBackToSignIn = () => {
    console.log('handleBackToSignIn')
  }

  return (
    <div style={{ height: 10000, backgroundColor: '#000000' }}>
      <Header
        isLoggedIn={isLoggedIn}
        handleButton={handleButton}
        name="Sergey"
        email="sergey.ose.pyatigorsk@gmail.com"
        src={avatarSrc}
        items={items}
      />
      <Avatar src={avatarSrc} />
      <Dropdown
        name="Sergey"
        email="sergey.ose.pyatigorsk@gmail.com"
        src={avatarSrc}
        items={items}
      />
      <TextField label="input" type="password" />
      <Checkbox checked={checked} onChange={handleChecked} />
      <LoginForm />
      <RegisterForm />
      <ForgotPassword />
      <CheckEmail email="sergey.ose.pyatigorsk@gmail.com" handleButton={handleBackToSignIn} />
      <CreateNewPassword />
      <Profile name="Sergey" email="sergey.ose.pyatigorsk@gmail.com" />
      <TabSwitcher />
      <Slider />
    </div>
  )
}
