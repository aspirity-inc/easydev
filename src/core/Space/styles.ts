import { styled } from 'styled-components';

export type SpaceStylesPropsType = {
  size?: number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space=around' | 'space-evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};

export const StyledSpace = styled('div')<SpaceStylesPropsType>`
  display: flex;
  max-width: fit-content;
  flex-wrap: wrap;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: ${({ size }) => (size ? `${size}px` : '16px')};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
`;
