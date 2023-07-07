import { SpaceStylesPropsType, StyledSpace } from '@core/Space/styles.ts';
import { ReactNode } from 'react';

type SpacePropsType = SpaceStylesPropsType & {
  children: ReactNode | ReactNode[];
};

export const Space = ({ children, ...props }: SpacePropsType) => {
  return <StyledSpace {...props}>{children}</StyledSpace>;
};
