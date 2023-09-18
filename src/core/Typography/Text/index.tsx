import { StyledText } from './styles.ts';
import type { TextProps } from './types.ts';

export const Text = ({ children, tag, bgColor, color, ...props }: TextProps) => {
  return (
    <StyledText className="easy_text" tag={tag || 'p'} $bgColor={bgColor} $color={color} {...props}>
      {children}
    </StyledText>
  );
};
