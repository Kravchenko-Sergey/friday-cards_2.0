import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'Large',
        'H1',
        'H2',
        'H3',
        'Body1',
        'Subtitle1',
        'Body2',
        'Subtitle2',
        'Caption',
        'Overline',
        'Link1',
        'Link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'Text content Large',
    variant: 'Large',
  },
}

export const H1: Story = {
  args: {
    children: 'Text content H1',
    variant: 'H1',
  },
}

export const H2: Story = {
  args: {
    children: 'Text content H2',
    variant: 'H2',
  },
}

export const H3: Story = {
  args: {
    children: 'Text content H3',
    variant: 'H3',
  },
}

export const Body1: Story = {
  args: {
    children: 'Text content Body1',
    variant: 'Body1',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'Text content Subtitle1',
    variant: 'Subtitle1',
  },
}

export const Body2: Story = {
  args: {
    children: 'Text content text',
    variant: 'Body2',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'Text content Subtitle2',
    variant: 'Subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'Text content Caption',
    variant: 'Caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Text content Overline',
    variant: 'Overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'Text content Link1',
    variant: 'Link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'Text content Link2',
    variant: 'Link2',
  },
}
