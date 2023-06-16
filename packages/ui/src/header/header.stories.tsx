import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Header>

export const Component: Story = {
  args: {
    text: 'My Header',
  },
}
