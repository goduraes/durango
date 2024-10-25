import styled from "styled-components";
import { DuButtonSizeType } from './Button.types'
import { base, BaseColorsType } from "../../colors";

const getHeight = (size: DuButtonSizeType) => {
    if (size === 'xs') return '32px';
    if (size === 'sm') return '36px';
    if (size === 'md') return '40px';
    if (size === 'lg') return '48px';
    return '52px';
};

const getColor= (val: BaseColorsType): string => {
    return base[val] || val;
}

const Button = styled.button<{ $variant: BaseColorsType, size: DuButtonSizeType }>`
  height: ${props => getHeight(props.size)};
  background: ${props => getColor(props.$variant)};
  color: #fff;
  padding: 0.25em 1em;
  border-radius: 3px;
  outline: none;
  border: none;
`;

export default Button;