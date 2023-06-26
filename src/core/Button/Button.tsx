import { ReactNode } from 'react';
import { Box } from '../Box';
import {
  container,
  content,
  minWidthContent,
  sidePaddingBtn,
} from './Button.css.ts';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { noUndefined } from '../../helpers/noUndefined.ts';

type IconPosition = 'left' | 'right';
type ButtonSize = 'md' | 'lg';

type ButtonProps = {
  children?: ReactNode | string | ReactNode[];
  icon?: ReactNode;
  iconPosition?: IconPosition;
  size?: ButtonSize;
};

export const Button = ({
  children,
  icon,
  iconPosition,
  size,
  ...props
}: ButtonProps) => {
  const styles = {
    [sidePaddingBtn]: size ? getSidePaddings(size) : '',
    [minWidthContent]: size ? getMinWidthContent(size) : '',
  };

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
        style={assignInlineVars(noUndefined(styles))}
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

const getSidePaddings = (size: string): string => {
  const sidePaddings: Record<string, string> = {
    lg: '29px',
    md: '7px',
  };

  return sidePaddings[size];
};

const getMinWidthContent = (size: string): string => {
  const minWidth: Record<string, string> = {
    lg: '118px',
    md: '106px',
  };

  return minWidth[size];
};
