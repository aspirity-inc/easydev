import { StyledArrow, StyledIcon } from './styles';
import type { ArrowProps } from '../../../types';

export const Arrow = ({ type = 'center', left = false, onClick }: ArrowProps) => {
  return (
    <StyledArrow
      className="easy_carousel-arrow"
      $type={type}
      $left={left}
      aria-label={left ? 'Previous' : 'Next'}
      onClick={onClick}
    >
      <StyledIcon as="span" className="material-symbols-rounded">
        keyboard_arrow_left
      </StyledIcon>
    </StyledArrow>
  );
};
