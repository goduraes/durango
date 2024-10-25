import { ButtonHTMLAttributes } from "react";
import { BaseColorsType } from "../../colors";

export type DuButtonType = ButtonHTMLAttributes<HTMLButtonElement> & { variant: BaseColorsType, size: DuButtonSizeType };
export type DuButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';