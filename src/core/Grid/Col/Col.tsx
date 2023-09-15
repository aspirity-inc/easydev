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
  const getStyles = () => {
    if (size) {
      const width = `${Math.round((size / columns) * 10e7) / 10e5}%`;
      return {
        $basis: width,
      };
    }
  };

  return (
    <StyledCol {...getStyles()} $alignContent={alignContent} $alignSelf={alignSelf} {...props}>
      {children}
    </StyledCol>
  );
};
