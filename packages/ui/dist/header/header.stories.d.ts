import { Meta, StoryObj } from '@storybook/react';
import { Header } from './header.js';

declare const meta: Meta<typeof Header>;

type Story = StoryObj<typeof Header>;
declare const Component: Story;

export { Component, meta as default };
