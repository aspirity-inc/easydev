import { AnimationWrapper } from './styles';
import { StyledIcon } from '../../styles';
import type { ChevronArrowProps } from '../../types';

export const ChevronArrow = ({ show }: ChevronArrowProps) => {
  if (!show) return null;

  return (
    <AnimationWrapper>
      <StyledIcon>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </StyledIcon>
    </AnimationWrapper>
  );
};
