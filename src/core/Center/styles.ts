import { styled } from 'styled-components';

export type StyledWrapperProps = {
  $inline: boolean;
};

export const StyledWrapper = styled('div')<StyledWrapperProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
`;
