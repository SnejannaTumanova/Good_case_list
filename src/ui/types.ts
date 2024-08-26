import {
  ButtonHTMLAttributes,
  ChangeEvent,
  HTMLInputTypeAttribute,
} from 'react';

export interface IOption {
  value: string;
  label: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  hint?: string;
  icon?: any;
}

export interface ITextInputProps {
  value: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  disabled?: boolean;
  isRequired?: boolean;
}
