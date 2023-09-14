import { css } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getClassFromStyledComponent = (styledComponent: any) => {
  return css`
    ${styledComponent}
  `
    .toString()
    .replaceAll(',', '')
    .replaceAll('\n', '')
    .trim();
};
