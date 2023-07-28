import { CSSProperties, useContext, ReactNode } from 'react';

import { StyledModalBody, StyledImage, StyledTitle, StyledText } from './styles';
import { InfoModalContext } from '../InfoModalContext';

export type ModalBodyProps = {
  children?: ReactNode;
  title?: string;
  text?: string;
  image?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const ModalBody = ({ title, text, image, ...props }: ModalBodyProps) => {
  const { colorful } = useContext(InfoModalContext);

  return (
    <StyledModalBody {...props}>
      <StyledImage>{image}</StyledImage>
      <StyledTitle variant="h3" $colorful={colorful}>
        {title}
      </StyledTitle>
      <StyledText variant="body3" $colorful={colorful}>
        {text}
      </StyledText>
    </StyledModalBody>
  );
};
