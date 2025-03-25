export type MainButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
}

export interface MainButtonProps extends BaseButtonProps {
  variant?: MainButtonVariant;
  icon?: React.ReactNode;
  rounded?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export interface MainIconButtonProps extends BaseButtonProps {
  variant?: IconButtonVariant;
}

export type ButtonProps<T> = MainButtonProps & T;
export type IconButtonProps<T> = MainIconButtonProps & T;
