import { CSSProperties, ReactNode } from 'react';

import { StyledModalFooter } from './styles';

export type ModalFooterProps = {
  children: ReactNode | ReactNode[];
  className?: string;
  style?: CSSProperties;
};

export const ModalFooter = ({ children, ...props }: ModalFooterProps) => (
  <StyledModalFooter {...props}>{children}</StyledModalFooter>
);
