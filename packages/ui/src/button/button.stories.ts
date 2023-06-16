import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './button'

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: '`variant` can be set `default` `outlined` `text`',
      options: ['default', 'outlined', 'text'],
      defaultValue: { summary: 'default' },
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    startIcon: {
      control: 'text',
      description: 'Set the start icon component of button',
      type: { name: 'string', required: false },
    },
    endIcon: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Component: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    children: 'Button',
  },
}
