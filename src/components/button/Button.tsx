import React from 'react';
import Button from './Button.style';
import { DgButtonType } from './Button.types';
import PropTypes from 'prop-types';
import DgLoading from '../loading/Loading';

const DgButton = (data: DgButtonType) => {
  const { 
    variant = 'solid',
    color = 'primary',
    size = 'md', 
    disabled = false,
    loading = false,
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
      {loading ? <DgLoading /> : props.children}    
    </Button>
  );
};
export default DgButton;

DgButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['solid', 'outlined', 'dashed', 'link']),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'disabled', 'light', 'dark']),
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
