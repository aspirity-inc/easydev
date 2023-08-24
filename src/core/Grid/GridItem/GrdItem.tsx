import { StyledGridItem } from './styles';
import { GridItemProps } from './types';

export const GridItem = ({ children }: GridItemProps) => {
  return <StyledGridItem className="grid-item">{children}</StyledGridItem>;
};
