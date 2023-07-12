import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './'

const meta = {
  title: 'Components/Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'sergey.ose.pyatigorsk@gmail.com',
  },
}
