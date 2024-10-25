import { fn } from '@storybook/test';
import { StoryObj, Meta } from '@storybook/react'
import React from 'react';
import { DuButtonType } from './Button.types';
import DuButton from './Button';

const meta: Meta<DuButtonType> = {
  title: 'Components/Button',
  component: DuButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', description: 'Tamanho do botão' },
    variant: { control: 'text', description: 'Cor do botão' },
  },
};

export default meta;

type Story = StoryObj<DuButtonType & { text: string }>;
export const Exemplo: Story = {
  args: { 
    text: 'Button',
    variant: 'blue',
    size: 'md',
    onClick: fn()
  },
  render: ({ ...args }) => {
    return (
      <DuButton 
        variant={args.variant}
        size={args.size}
        onClick={args.onClick}
      >
        {args.text}
      </DuButton>
    )
  }
};