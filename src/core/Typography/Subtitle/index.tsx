import { StyledSubtitle } from './styles.ts';
import type { SubtitleProps } from './types.ts';

export const Subtitle = ({ children, as, level, ...props }: SubtitleProps) => {
  return (
    <StyledSubtitle className="easy_subtitle" as={as || 'h4'} $level={level} {...props}>
      {children}
    </StyledSubtitle>
  );
};
