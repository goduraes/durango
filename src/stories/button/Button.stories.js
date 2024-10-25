import { fn } from '@storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Exemplo = {
  args: {
    primary: true,
    label: 'Button',
    size: 'medium'
  },
};