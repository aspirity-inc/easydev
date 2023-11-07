import { StyledDot, StyledUserDot } from './styles';
import type { DotProps } from '../../../types';

export const Dot = ({ active, onClick, carouselDotProps, icons }: DotProps) => {
  if (!icons) {
    return <StyledDot className="easy_carousel-dot" $active={active} onClick={onClick} {...carouselDotProps} />;
  }

  return (
    <StyledUserDot onClick={onClick} {...carouselDotProps}>
      {active ? icons.active : icons.default}
    </StyledUserDot>
  );
};
