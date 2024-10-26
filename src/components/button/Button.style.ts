import styled from "styled-components";
import { DuButtonSizeType } from './Button.types'
import { base, baseTextButton, BaseColorsType } from "../../colors";

const getHeight = (size: DuButtonSizeType) => {
    if (size === 'xs') return '32px';
    if (size === 'sm') return '36px';
    if (size === 'md') return '40px';
    if (size === 'lg') return '48px';
    return '52px';
};

const getBgColor= (val: BaseColorsType | string): string => {
  if(!base.hasOwnProperty(val)) return val;
  return base[val as BaseColorsType];
}

const getColor= (color: BaseColorsType | string, bgCOlor: BaseColorsType | string): string => {
  if(base.hasOwnProperty(bgCOlor)) return baseTextButton[bgCOlor as BaseColorsType];
  if(color && base.hasOwnProperty(color))  return base[color as BaseColorsType];
  return color;
}

const Button = styled.button<{ $variant: BaseColorsType | string, $color: BaseColorsType | string,  $size: DuButtonSizeType }>`
  height: ${props => getHeight(props.$size)};
  background: ${props => getBgColor(props.$variant)};
  color: ${props => getColor(props.$color, props.$variant)};
  padding: 0.25em 1em;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export default Button;