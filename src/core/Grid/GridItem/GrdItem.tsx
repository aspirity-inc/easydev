import { StyledGridItem } from './styles';
import { GridItemProps } from './types';

export const GridItem = ({ children, columns, size }: GridItemProps) => {
  const calculateStyle = () => {
    if (size === true) {
      return {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      };
    } else if (size === 'auto') {
      return {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto',
      };
    } else {
      const width = `${Math.round(((size || 1) / (columns || 12)) * 10e7) / 10e5}%`;
      return {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
      };
    }
  };

  return (
    <StyledGridItem className="grid-item" {...calculateStyle()}>
      {children}
    </StyledGridItem>
  );
};
