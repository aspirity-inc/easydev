import { ComponentPropsWithoutRef } from 'react';

import { StyledWrapper } from './styles';

type CenterProps = ComponentPropsWithoutRef<'div'> & {
  inline: boolean;
};

export const Center = ({ children, inline = false, ...otherProps }: CenterProps) => {
  return (
    <StyledWrapper $inline={inline} {...otherProps}>
      {children}
    </StyledWrapper>
  );
};
