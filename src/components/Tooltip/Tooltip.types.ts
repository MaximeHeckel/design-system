import { PopperContentProps } from '@radix-ui/react-tooltip';

export interface TooltipProps {
  children: React.ReactNode;
  content: string | React.ReactNode;
  id?: string;
  delayDuration?: number;
  side?: PopperContentProps['side'];
  sideOffset?: PopperContentProps['sideOffset'];
  portalled?: boolean;
  visuallyHiddenText?: string;
}
