import { CSSProperties, ReactNode } from 'react';
import { Box } from '../Box';
import { container, reversed, sizeType } from './Button.css.ts';
import { cx } from '@linaria/core';

type IconPosition = 'left' | 'right';
type ButtonSize = keyof typeof sizeType;

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
};

export const Button = ({
  children,
  className,
  icon,
  iconPosition,
  size,
  ...props
}: ButtonProps) => {
  return (
    <Box>
      <Box
        tag={'button'}
        className={cx(
          className,
          container,
          sizeType[size || 'lg'],
          iconPosition === 'left' && reversed
        )}
        {...props}
      >
        {children}
        {icon}
      </Box>
    </Box>
  );
};
