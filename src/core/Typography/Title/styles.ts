import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { getTitleVariant } from '../styles.ts';
import { TitleVariant, TypographyBaseType } from '../types.ts';

type TitleProps = Pick<TypographyBaseType, 'color' | 'bgColor'> & {
  variant?: TitleVariant;
};

export const StyledTitle = styled(Box)<TitleProps>`
  margin: 0;
  padding: 0;

  ${({ variant }) => getTitleVariant(variant)};

  ${({ color, bgColor }) => css`
    color: ${color};
    background-color: ${bgColor};
  `};
`;
