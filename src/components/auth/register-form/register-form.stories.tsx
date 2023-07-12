import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { RegisterForm } from './'

const meta = {
  title: 'Components/Auth/RegisterForm',
  component: RegisterForm,
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'sergey.ose.pyatigorsk@gmail.com',
    name: 'Sergey',
  },
}
