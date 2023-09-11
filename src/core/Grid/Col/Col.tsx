import { StyledCol } from './styles';
import type { ColProps } from './types';

export const DEFAULT_NUMBER_OF_COLUMNS = 24;

export const Col = ({
  children,
  columns = DEFAULT_NUMBER_OF_COLUMNS,
  size,
  alignContent,
  alignSelf,
  ...props
}: ColProps) => {
  const calculateStyle = () => {
    if (!size) {
      return {
        $basis: 'auto',
        $grow: 0,
        $shrink: 0,
        $maxWidth: 'none',
        $width: 'auto',
      };
    } else {
      const width = `${Math.round((size / columns) * 10e7) / 10e5}%`;
      return {
        $basis: width,
        $grow: 0,
        $maxWidth: width,
      };
    }
  };

  return (
    <StyledCol
      {...calculateStyle()}
      $alignContent={alignContent}
      $alignSelf={alignSelf}
      {...props}
      className="grid-item"
    >
      {children}
    </StyledCol>
  );
};
