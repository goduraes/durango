import { StoryObj } from '@storybook/react'
import React from 'react';
import DgButton from './Button';
import { DgButtonType } from './Button.types';

export default {
  title: 'Components/Button',
  component: DgButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', },
    variant: { control: 'select', },
    color: { control: 'text', },
  },
};

type Story = StoryObj<DgButtonType & { text: string }>;
export const Exemplo: Story = {
  args: { 
    text: 'Button',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  
  render: ({ ...args }) => {
    return (
      <DgButton 
        variant={args.variant}
        color={args.color}
        size={args.size}
        disabled={args.disabled}
        loading={args.loading}
        onClick={args.onClick}
      >
        {args.text}
      </DgButton>
    )
  }
};