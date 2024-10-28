import { StoryObj } from '@storybook/react'
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
    variant: 'solid',
    color: 'primary',
    size: 'md',
    disabled: false,
  },
  render: ({ ...args }) => {
    return (
      <DuButton 
        variant={args.variant}
        color={args.color}
        size={args.size}
        disabled={args.disabled}
        onClick={args.onClick}
      >
        {args.text}
      </DuButton>
    )
  }
};