import { StyledCenter } from './styles';
import type { CenterProps } from './types';

export const Center = ({ children, inline, gap, ...props }: CenterProps) => {
  return (
    <StyledCenter $inline={inline} $gap={gap} {...props}>
      {children}
    </StyledCenter>
  );
};
