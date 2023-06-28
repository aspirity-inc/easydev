import { ReactNode, CSSProperties } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box } from '../Box';
import { brandColor, container, themeClass } from './Text.css.ts';
import { noUndefined } from '../../helpers/noUndefined.ts';

export interface CustomStyles extends CSSProperties {
  '--color': string;
}

type TextProps = {
  children: ReactNode | string | ReactNode[];
  color?: string;
  tag: string;
};

export const Text = ({ children, tag, color, ...props }: TextProps) => {
  const styles = {
    [brandColor]: color || '',
  };
  return (
    <Box className={themeClass}>
      <Box tag={tag || 'span'} className={container} style={assignInlineVars(noUndefined(styles))} {...props}>
        {children}
      </Box>
    </Box>
  );
};
