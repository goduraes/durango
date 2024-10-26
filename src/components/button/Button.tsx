import React from 'react';
import Button from './Button.style';
import { DuButtonType } from './Button.types';
import PropTypes from 'prop-types';

const DuButton = (data: DuButtonType) => {
  const { 
    variant = 'primary',
    color = 'light',
    size = 'md', 
    ...props 
  } = data;
  
  return (
    <Button $variant={variant} $color={color} $size={size} {...props}>
      {props.children}
    </Button>
  );
};
export default DuButton;

DuButton.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'disabled', 'light', 'dark']),
    PropTypes.string
  ]),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'disabled', 'light', 'dark']),
    PropTypes.string
  ]),
};
