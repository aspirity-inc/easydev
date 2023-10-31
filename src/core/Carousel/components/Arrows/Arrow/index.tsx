import { KeyboardArrowLeftIcon } from '@icons';

import { StyledArrow, StyledIcon } from './styles';
import type { ArrowProps } from '../../../types';

export const Arrow = ({ type = 'center', left = false, onClick, icon }: ArrowProps) => {
  const defaultArrowIcon = (
    <StyledIcon $type={type} $left={left}>
      <KeyboardArrowLeftIcon />
    </StyledIcon>
  );

  return (
    <StyledArrow
      className="easy_carousel-arrow"
      $type={type}
      $left={left}
      aria-label={left ? 'Previous' : 'Next'}
      onClick={onClick}
    >
      {icon || defaultArrowIcon}
    </StyledArrow>
  );
};
