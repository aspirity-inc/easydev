import { ReactNode } from 'react';

import { SpaceStylesPropsType, StyledSpace } from './styles.ts';

type SpacePropsType = SpaceStylesPropsType & {
  children: ReactNode | ReactNode[];
};

export const Space = ({ children, ...props }: SpacePropsType) => {
  return <StyledSpace {...props}>{children}</StyledSpace>;
};
