import { styled, css } from 'styled-components';

type StyledCloseBtnProps = {
  $colorful?: boolean;
};

export const StyledCloseButton = styled('button')<StyledCloseBtnProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
  --colorful: ${({ theme }) => theme.colors.surface['900']};

  display: flex;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  margin-left: auto;
  padding-left: 10px;

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
