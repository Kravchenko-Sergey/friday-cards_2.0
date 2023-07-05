// eslint-disable-next-line import/no-unresolved
import { Avatar } from '../src/components/ui/avatar/avatar.tsx'
import { Dropdown } from '../src/components/ui/dropdown/dropdown.tsx'
import { Header } from '../src/components/ui/header'

import logoutIcon from './assets/dropdown/log-out-outline.svg'
import personIcon from './assets/dropdown/person-outline.svg'

export const App = () => {
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

  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Avatar src={avatarSrc} />
      <Dropdown
        src={avatarSrc}
        name={'Sergey'}
        email={'sergey.ose.pyatigorsk@gmail.com'}
        items={items}
      />
    </div>
  )
}
