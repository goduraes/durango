import { fn } from '@storybook/test';
import { StoryObj, Meta } from '@storybook/react'
import React from 'react';
import DuButton from './Button';
import { DuButtonType } from './Button.types';

export default {
  title: 'Components/Button',
  component: DuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', },
    variant: { control: 'text', },
    color: { control: 'text', },
  },
};

type Story = StoryObj<DuButtonType & { text: string }>;
export const Exemplo: Story = {
  args: { 
    text: 'Button',
    variant: 'primary',
    color: 'light',
    size: 'md',
  },
  render: ({ ...args }) => {
    return (
      <DuButton 
        variant={args.variant}
        color={args.color}
        size={args.size}
        onClick={args.onClick}
      >
        {args.text}
      </DuButton>
    )
  }
};