import { ComponentPropsWithoutRef } from 'react';

import { StyledWrapper } from './styles';

type CenterProps = ComponentPropsWithoutRef<'div'> & {
  inline?: boolean;
  gap?: number;
};

export const Center = ({ children, inline, gap, ...otherProps }: CenterProps) => {
  return (
    <StyledWrapper $inline={inline} $gap={gap} {...otherProps}>
      {children}
    </StyledWrapper>
  );
};
