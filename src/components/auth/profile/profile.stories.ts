import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './'

const meta = {
  title: 'Components/Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'sergey.ose.pyatigorsk@gmail.com',
    name: 'Sergey',
  },
}
