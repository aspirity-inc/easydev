import { ReactNode } from 'react';
import { Box } from '../Box';
import { container, content } from './Button.css.ts';

type IconPosition = 'left' | 'right';

type ButtonProps = {
  children: ReactNode | string | ReactNode[];
  icon?: ReactNode;
  iconPosition?: IconPosition;
};

export const Button = ({
  children,
  icon,
  iconPosition,
  ...props
}: ButtonProps) => {
  const renderButtonContent = () => {
    if (children && icon) {
      if (iconPosition === 'left') {
        return (
          <>
            {icon}
            {children}
          </>
        );
      } else {
        return (
          <>
            {children}
            {icon}
          </>
        );
      }
    } else if (children) {
      return children;
    } else if (icon) {
      return icon;
    }
  };

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
          {renderButtonContent()}
        </Box>
      </Box>
    </Box>
  );
};
