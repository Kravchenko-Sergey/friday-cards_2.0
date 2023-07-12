import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { ForgotPassword } from './'

const meta = {
  title: 'Components/Auth/ForgotPassword',
  component: ForgotPassword,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    baseName: '',
    email: 'sergey.ose.pyatigorsk@gmail.com',
  },
}
