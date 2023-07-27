import { CSSProperties, useContext, ReactNode } from 'react';

import { StyledModalBody, StyledImage, StyledTitle, StyledText } from './styles';
import { ModalContext } from '../ModalContext';

export type ModalBodyProps = {
  children?: ReactNode;
  title?: string;
  text?: string;
  image?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalBody = ({ children, title, text, image, ...props }: ModalBodyProps) => {
  const { colorful } = useContext(ModalContext);

  return (
    <StyledModalBody {...props}>
      <StyledImage>{image}</StyledImage>
      <StyledTitle variant="h3" $colorful={colorful}>
        {title}
      </StyledTitle>
      <StyledText variant="body3" $colorful={colorful}>
        {text}
      </StyledText>
      {children}
    </StyledModalBody>
  );
};
