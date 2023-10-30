import { AnimationWrapper, StyledChevronIcon } from './styles';
import type { ChevronIconProps } from '../../types';

export const ChevronIcon = ({ opened, openIcon, closeIcon, ...props }: ChevronIconProps) => {
  if (openIcon && closeIcon) {
    return <StyledChevronIcon {...props}>{opened ? closeIcon : openIcon}</StyledChevronIcon>;
  }

  return (
    <AnimationWrapper $opened={opened}>
      {openIcon ? (
        <StyledChevronIcon {...props}>{openIcon}</StyledChevronIcon>
      ) : (
        <StyledChevronIcon className="material-symbols-outlined" {...props}>
          keyboard_arrow_down
        </StyledChevronIcon>
      )}
    </AnimationWrapper>
  );
};
