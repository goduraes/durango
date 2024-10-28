import styled from "styled-components";
import { DuButtonSizeType } from './Button.types'
import { base, baseTextButton, BaseColorsType } from "../../colors";

const getHeight = (size: DuButtonSizeType) => {
    if (size === 'sm') return 'height: 32px';
    if (size === 'md') return 'height: 40px';
    return 'height: 48px';
};

const getVariant = (props: any): string => {
  const bgColor = base[props.$color as BaseColorsType] ?? props.$color;
  const color = baseTextButton[props.$color as BaseColorsType] ?? '#fff';
  let style = ``
  
  if (props.$variant === 'solid') {
    style += `
      background: ${bgColor}; 
      color: ${color}; border: none;
    `;
  }
  
  if(props.$variant === 'outlined' || props.$variant === 'dashed') {
    style += `
      background: transparent; 
      color: ${bgColor}; 
      border: 1px ${(props.$variant === 'outlined' ? 'solid' : 'dashed')} ${bgColor};
    `;
  }
  
  if(props.$variant === 'link') {
    style += `
      background: transparent; 
      color: ${bgColor}; 
      border: none;
    `;
  }
  
  return style;
}

const Button = styled.button<{ $variant: BaseColorsType | string, $color: BaseColorsType | string,  $size: DuButtonSizeType }>`
  ${props => getHeight(props.$size)};
  ${props => getVariant(props)};
  font-size: ${props => props.$size === 'lg' ? '16px' : '14px'};
  padding: 0.25em 1em;
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Button;