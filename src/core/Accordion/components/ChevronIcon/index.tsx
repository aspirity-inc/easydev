import { KeyboardArrowDownIcon } from '@icons';

import { AnimationWrapper, StyledChevronIcon } from './styles';
import type { ChevronIconProps } from '../../types';

export const ChevronIcon = ({
  opened,
  openIcon,
  closeIcon,
  animationWrapperProps,
  chevronIconProps,
  ...props
}: ChevronIconProps) => {
  if (openIcon && closeIcon) {
    return <StyledChevronIcon {...props}>{opened ? closeIcon : openIcon}</StyledChevronIcon>;
  }

  return (
    <AnimationWrapper $opened={opened} {...animationWrapperProps}>
      <StyledChevronIcon {...chevronIconProps} {...props}>
        {openIcon || <KeyboardArrowDownIcon />}
      </StyledChevronIcon>
    </AnimationWrapper>
  );
};
