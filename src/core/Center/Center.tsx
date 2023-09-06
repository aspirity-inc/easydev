import { StyledCenter } from './styles';
import type { CenterProps } from './types';

export const Center = ({ children, inline, gap, ...otherProps }: CenterProps) => {
  return (
    <StyledCenter $inline={inline} $gap={gap} {...otherProps}>
      {children}
    </StyledCenter>
  );
};
