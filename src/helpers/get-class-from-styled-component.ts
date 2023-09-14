import { IStyledComponent, Runtime, css } from 'styled-components';

export const getClassFromStyledComponent = <R extends Runtime, Props extends object>(
  styledComponent: IStyledComponent<R, Props>
) => {
  return css`
    ${styledComponent}
  `
    .toString()
    .replaceAll(',', '')
    .replaceAll('\n', '')
    .trim();
};
