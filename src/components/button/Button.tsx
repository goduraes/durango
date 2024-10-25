import React from 'react';
import Button from './Button.style';
import { DuButtonType } from './Button.types'

const DuButton = ({ variant = 'blue', size = 'md', ...props }: DuButtonType) => {
  return (
    <Button $variant={variant} size={size} {...props}>
      {props.children}
    </Button>
  );
};
export default DuButton;
