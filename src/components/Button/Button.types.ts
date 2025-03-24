export type MainButtonVariant = 'primary' | 'secondary' | 'icon';
export type IconButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  children: React.ReactNode;
}

export interface MainButtonProps extends BaseButtonProps {
  variant: MainButtonVariant;
  icon?: never;
  rounded?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export interface MainIconButtonProps extends BaseButtonProps {
  variant: IconButtonVariant;
  startIcon?: never;
  endIcon?: never;
}

export type ButtonProps<T> = MainButtonProps & T;
export type IconButtonProps<T> = MainIconButtonProps & T;
