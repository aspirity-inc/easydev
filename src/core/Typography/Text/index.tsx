import { StyledText } from './styles.ts';
import type { TextProps } from './types.ts';

export const Text = ({ children, as, variant, ellipsis, ...props }: TextProps) => {
  return (
    <StyledText className="easy_text" as={as || 'p'} $variant={variant} $ellipsis={ellipsis} {...props}>
      {children}
    </StyledText>
  );
};
