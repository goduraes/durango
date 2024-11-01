import React from 'react';
import Button from './Button.style';
import { DgButtonType } from './Button.types';
import PropTypes from 'prop-types';
import DgLoading from '../loading/Loading';

const DgButton = ({variant = 'solid', color = 'primary', size = 'md', disabled, loading, children, ...rest }: DgButtonType) => {
  if(disabled) color = 'disabled';

  return (
    <Button 
      $variant={variant}
      $color={color}
      $size={size}
      disabled={disabled}
      {...rest}
    > 
      {loading ? <DgLoading /> : children}
    </Button>
  );
};
export default DgButton;

DgButton.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['solid', 'outlined', 'link']),
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'disabled', 'light', 'dark']),
    PropTypes.string
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
