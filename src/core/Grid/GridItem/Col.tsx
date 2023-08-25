import { StyledCol } from './styles';
import { ColProps } from './types';

export const Col = ({ children, columns, size }: ColProps) => {
  const calculateStyle = () => {
    if (size === true) {
      return {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      };
    } else if (size === 'auto' || !size) {
      return {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto',
      };
    } else {
      const width = `${Math.round(((size || 6) / (columns || 12)) * 10e7) / 10e5}%`;
      return {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
      };
    }
  };

  return (
    <StyledCol className="grid-item" {...calculateStyle()}>
      {children}
    </StyledCol>
  );
};
