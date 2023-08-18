import { styled } from 'styled-components';

import type { StepperPropsStyledType } from './types.ts';

export const StyledStepper = styled('div')<StepperPropsStyledType>`
  --mainColor: ${({ theme, $activeColor }) =>
    $activeColor || (theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400'])};
  --secondaryColor: ${({ theme, $secondaryColor }) =>
    $secondaryColor || (theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700'])};
  --secondaryNumericColor: ${({ theme, $secondaryColor }) =>
    $secondaryColor || (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800'])};

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  z-index: 1;
`;
