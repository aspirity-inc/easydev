import { styled, css } from 'styled-components';

type StyledCloseBtnProps = {
  $colorful?: boolean;
};

export const StyledCloseButton = styled('button')<StyledCloseBtnProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  display: block;
  padding: 0;
  margin: 0;
  margin-left: auto;
  padding-top: 4px;
  padding-left: 10px;
  align-self: flex-start;

  ${({ $colorful }) =>
    $colorful
      ? css`
          color: var(--colorful);
        `
      : css`
          color: var(--monochrome);
        `};

  background-color: transparent;
  border: 0;
  cursor: pointer;
  & > div {
    display: block;
  }
`;
