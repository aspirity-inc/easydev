import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledSubMenu = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AnimationMenuWrapper = styled(Box)<{
  $opened: boolean;
  $height: number;
  $collapsed: boolean;
  $hovered: boolean;
}>`
  transition: height 0.3s cubic-bezier(0, 0.91, 1, 1), opacity 0.2s ease-out, background-color 0.2s ease-out;

  ${({ $opened, $height }) => {
    if ($opened) {
      return css`
        height: ${$height}px;
        opacity: 1;
      `;
    } else {
      return css`
        height: 0;
        opacity: 0;
        overflow: hidden;
      `;
    }
  }};

  //Styles for collapsed submenu
  ${({ $collapsed }) => {
    return (
      $collapsed &&
      css`
        position: absolute;
        right: 0;
        width: calc(100% - 48px);
        background-color: ${({ theme }) =>
          theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['700']};
        border-radius: 0px 0px 8px 8px;
      `
    );
  }}
`;
