import { StyledSubtitle } from './styles.ts';
import type { SubtitleProps } from './types.ts';

export const Subtitle = ({ children, tag, bgColor, color, ...props }: SubtitleProps) => {
  return (
    <StyledSubtitle tag={tag || 'h4'} $bgColor={bgColor} $color={color} {...props}>
      {children}
    </StyledSubtitle>
  );
};
