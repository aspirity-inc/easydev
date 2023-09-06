import { StyledWrapper } from './styles';
import type { CenterProps } from './types';

export const Center = ({ children, inline, gap, ...otherProps }: CenterProps) => {
  return (
    <StyledWrapper $inline={inline} $gap={gap} {...otherProps}>
      {children}
    </StyledWrapper>
  );
};
