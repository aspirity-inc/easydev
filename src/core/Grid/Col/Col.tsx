import { StyledCol } from './styles';
import { ColProps } from './types';

export const DEFAULT_NUMBER_OF_COLUMNS = 24;

export const Col = (props: ColProps) => {
  const { children, columns, size, ...otherProps } = props;

  const calculateStyle = () => {
    if (!size) {
      return {
        basis: 'auto',
        grow: 0,
        shrink: 0,
        $maxWidth: 'none',
        width: 'auto',
      };
    } else {
      const width = `${Math.round((size / (columns || DEFAULT_NUMBER_OF_COLUMNS)) * 10e7) / 10e5}%`;
      return {
        basis: width,
        grow: 0,
        $maxWidth: width,
      };
    }
  };

  return (
    <StyledCol className="grid-item" {...calculateStyle()} {...otherProps}>
      {children}
    </StyledCol>
  );
};
