import { CSSProperties, ReactNode } from 'react';

import { StyledModalFooter } from './styles';

export type ModalFooterProps = {
  footerContent?: () => ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalFooter = ({ footerContent, ...props }: ModalFooterProps) => (
  <StyledModalFooter {...props}>{footerContent && footerContent()}</StyledModalFooter>
);
