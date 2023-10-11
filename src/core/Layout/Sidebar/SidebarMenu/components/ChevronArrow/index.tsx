import { ChevronAnimationWrapper } from './styles';
import { StyledIcon } from '../../styles';
import type { ChevronArrowProps } from '../../types';

export const ChevronArrow = ({ opened }: ChevronArrowProps) => {
  return (
    <ChevronAnimationWrapper $opened={opened}>
      <StyledIcon>
        <span className="material-symbols-outlined">keyboard_arrow_down</span>
      </StyledIcon>
    </ChevronAnimationWrapper>
  );
};
