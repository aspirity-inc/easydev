import { KeyboardArrowDownIcon } from '@icons';

import { ChevronAnimationWrapper } from './styles';
import { StyledIcon } from '../../styles';
import type { ChevronArrowProps } from '../../types';

export const ChevronArrow = ({ opened }: ChevronArrowProps) => {
  return (
    <ChevronAnimationWrapper $opened={opened}>
      <StyledIcon>
        <KeyboardArrowDownIcon />
      </StyledIcon>
    </ChevronAnimationWrapper>
  );
};
