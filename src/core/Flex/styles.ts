import { CSSProperties } from 'react';
import { styled } from 'styled-components';

export type StyledWrapperProps = {
  $direction?: CSSProperties['flexDirection'];
  $align?: CSSProperties['alignItems'];
  $justify?: CSSProperties['justifyContent'];
  $wrap?: CSSProperties['flexWrap'];
  $gap?: number;
  $rowGap?: number;
  $columnGap?: number;
};

export const StyledWrapper = styled('div')<StyledWrapperProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  flex-wrap: ${({ $wrap }) => $wrap || 'wrap'};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
`;
