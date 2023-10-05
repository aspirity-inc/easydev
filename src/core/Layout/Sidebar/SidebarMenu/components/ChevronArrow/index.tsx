import { AnimationWrapper } from './styles';
import { StyledIcon } from '../../styles';
import type { ChevronArrowProps } from '../../types';

export const ChevronArrow = ({ show }: ChevronArrowProps) => {
  if (!show) return null;

  return (
    <AnimationWrapper>
      <StyledIcon>
        <div className="material-symbols-outlined">keyboard_arrow_down</div>
      </StyledIcon>
    </AnimationWrapper>
  );
};
