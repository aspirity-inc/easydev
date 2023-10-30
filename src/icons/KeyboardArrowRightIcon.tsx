import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const KeyboardArrowRightIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
    </StyledSVG>
  );
};
