import { css } from 'styled-components';

export const scrollbarStyles = css`
  --scrollbarColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500']};

  overflow: auto;

  /* for IE */
  scrollbar-face-color: var(--scrollbarColor);
  scrollbar-track-color: transparent;
  scrollbar-arrow-color: var(--scrollbarColor);
  scrollbar-shadow-color: var(--scrollbarColor);
  scrollbar-dark-shadow-color: var(--scrollbarColor);

  /* for FireFox */
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbarColor) transparent;
  margin-right: 4px;

  /* for Chrome */
  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--scrollbarColor);
  }
`;
