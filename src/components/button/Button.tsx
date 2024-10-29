import React from 'react';
import Button from './Button.style';
import { DuButtonType } from './Button.types';
import PropTypes from 'prop-types';
import Loading from '../../assets/loading.svg';

const DuButton = (data: DuButtonType) => {
  const { 
    variant = 'solid',
    color = 'primary',
    size = 'md', 
    disabled = false,
    ...props 
  } = data;
  
  return (
    <Button
      $variant={variant}
      $color={disabled ? "disabled" : color}
      $size={size}
      disabled={disabled}
      {...props}
    >
      {props.children}
    </Button>
  );
};
export default DuButton;

DuButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['solid', 'outlined', 'dashed', 'link']),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'disabled', 'light', 'dark']),
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
};
