import styled from "styled-components";
import { DgButtonSizeType } from './Button.types'
import { base, BaseColorsType } from "../../colors";

const getHeight = (size: DgButtonSizeType) => {
    if (size === 'sm') return 'height: 32px';
    if (size === 'md') return 'height: 40px';
    return 'height: 48px';
};

const getTextColor = (color: string) => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  color = color.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
  });
  let rgb: any = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  rgb = (rgb ? { r: parseInt(rgb[1], 16), g: parseInt(rgb[2], 16), b: parseInt(rgb[3], 16) } : { r: 0, g: 0, b: 0 });
  return '#' + (Math.round(((parseInt(rgb.r) * 299) + (parseInt(rgb.g) * 587) + (parseInt(rgb.b) * 114)) /1000) > 150 ? "1f2937" : "FFF" );
}

const getVariant = (props: any): string => {
  const bgColor = base[props.$color as BaseColorsType] ?? props.$color;
  let style = ``
  
  if (props.$variant === 'solid') {
    style += `
      background: ${bgColor}; 
      color: ${getTextColor(props.$color)};
      border: none;
      .DgLoading circle { fill: ${getTextColor(props.$color)}; }
    `;
  }
  
  if(props.$variant === 'outlined' || props.$variant === 'dashed') {
    style += `
      background: transparent; 
      color: ${bgColor}; 
      border: 1px ${(props.$variant === 'outlined' ? 'solid' : 'dashed')} ${bgColor};
      .DgLoading circle { fill: ${bgColor}; }
    `;
  }
  
  if(props.$variant === 'link') {
    style += `
      background: transparent; 
      color: ${bgColor};
      border: none;
      .DgLoading circle { fill: ${bgColor}; }
    `;
  }
  
  return style;
}

const Button = styled.button<{ $variant: BaseColorsType | string, $color: BaseColorsType | string,  $size: DgButtonSizeType }>`
  ${props => getHeight(props.$size)};
  ${props => getVariant(props)};
  font-size: ${props => props.$size === 'lg' ? '16px' : '14px'};
  padding: 0.25em 1em;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Button;