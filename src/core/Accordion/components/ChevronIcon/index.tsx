import { AnimationWrapper, StyledChevronIcon } from './styles';
import type { ChevronIconProps } from '../../types';

export const ChevronIcon = ({ opened, openIcon, closeIcon, ...props }: ChevronIconProps) => {
  if (openIcon && closeIcon) {
    return (
      <StyledChevronIcon className="material-symbols-outlined" {...props}>
        {opened ? closeIcon : openIcon}
      </StyledChevronIcon>
    );
  }

  return (
    <AnimationWrapper $opened={opened}>
      <StyledChevronIcon className="material-symbols-outlined" {...props}>
        {openIcon || 'keyboard_arrow_down'}
      </StyledChevronIcon>
    </AnimationWrapper>
  );
};
