import { BaseColorsType } from "../../colors";
export interface DuButtonType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: BaseColorsType | string,
    color?: BaseColorsType | string,
    size?: DuButtonSizeType
}
  
export type DuButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';