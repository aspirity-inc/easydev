import { StyledGrid } from './styles';
import { GridProps } from './types';

export const Grid = (props: GridProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <StyledGrid className={className} {...otherProps}>
      {children}
    </StyledGrid>
  );
};
