import { KeyboardArrowLeftIcon } from '@icons';

import { StyledArrow, StyledIcon } from './styles';
import type { ArrowProps } from '../../../types';

export const Arrow = ({
  type = 'center',
  left = false,
  onClick,
  carouselArrowProps,
  defaultArrowIconProps,
  icon,
}: ArrowProps) => {
  const defaultArrowIcon = (
    <StyledIcon $type={type} $left={left} {...defaultArrowIconProps}>
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
      {...carouselArrowProps}
    >
      {icon || defaultArrowIcon}
    </StyledArrow>
  );
};
