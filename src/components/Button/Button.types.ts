export type MainButtonVariant = 'primary' | 'secondary';
export type IconButtonVariant = 'icon';

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
}

interface MainButtonProps extends BaseButtonProps {
  variant: MainButtonVariant;
  icon?: never;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface IconButtonProps extends BaseButtonProps {
  variant: IconButtonVariant;
  icon: React.ReactNode;
  startIcon?: never;
  endIcon?: never;
}

export type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T;
