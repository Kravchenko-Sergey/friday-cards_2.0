import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {},
    checked: {},
    disabled: {},
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    label: 'Click here',
    checked: true,
    disabled: false,
  },
}

export const UnChecked: Story = {
  args: {
    label: 'Click here',
    checked: false,
    disabled: false,
  },
}
