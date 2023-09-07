import { StyledSpace } from './styles.ts';
import type { SpaceProps } from './types.ts';

export const Space = ({ children, size, alignItems, justifyContent, direction, ...props }: SpaceProps) => {
  return (
    <StyledSpace
      $size={size}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $direction={direction}
      {...props}
    >
      {children}
    </StyledSpace>
  );
};
