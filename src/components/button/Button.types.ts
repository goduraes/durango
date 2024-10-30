import { BaseColorsType } from "../../colors";
export interface DgButtonType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: DgButtonVariantType,
    color?: BaseColorsType | string,
    size?: DgButtonSizeType,
    loading?: boolean
}
  
export type DgButtonSizeType = 'sm' | 'md' | 'lg';
export type DgButtonVariantType = 'solid' | 'outlined' | 'dashed'  | 'link';