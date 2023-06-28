import { ReactNode, CSSProperties } from 'react';
import { cx } from '@linaria/core';
import { Box } from '../Box';

type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

interface newStyles extends CSSProperties {
  '--color': string;
}

type TitleProps = {
  children: ReactNode | string | ReactNode[];
  order: TitleOrder;
  style: newStyles;
};

export const Title = ({ children, order, ...props }: TitleProps) => {
  return (
    <Box tag={`h${order}`} className={cx('')} {...props}>
      {children}
    </Box>
  );
};
