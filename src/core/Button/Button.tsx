import { ReactNode } from 'react';
import { Box } from '../Box';
import { container, content } from './Button.css.ts';

type ButtonProps = {
  children: ReactNode | string | ReactNode[];
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Box // box для внешней темы (светлая-темная)
    >
      <Box // box - кнопка
        tag={'button'}
        className={container}
        {...props}
      >
        <Box
          className={content} // box для контента кнопки
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
