import { styled } from 'styled-components';

export type SpaceStylesPropsType = {
  size?: number;
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  direction?: React.CSSProperties['flexDirection'];
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
