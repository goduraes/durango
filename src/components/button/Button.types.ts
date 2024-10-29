import { BaseColorsType } from "../../colors";
export interface DuButtonType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: DuButtonVariantType,
    color?: BaseColorsType | string,
    size?: DuButtonSizeType,
}
  
export type DuButtonSizeType = 'sm' | 'md' | 'lg';
export type DuButtonVariantType = 'solid' | 'outlined' | 'dashed'  | 'link';