import type { Meta, StoryObj } from '@storybook/react'

import logoutIcon from '../../../assets/dropdown/log-out-outline.svg'
import personIcon from '../../../assets/dropdown/person-outline.svg'

import { Header } from './'

const meta = {
  title: 'Components/UI/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    isLoggedIn: {},
    handleButton: {},
    name: {},
    email: {},
    src: {},
    items: {},
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isLoggedIn: true,
    handleButton: () => {},
    name: 'Sergey',
    email: 'sergey.ose.pyatigorsk@gmail.com',
    src: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
    items: [
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
    ],
  },
}
