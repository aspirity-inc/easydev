import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const KeyboardArrowLeftIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </StyledSVG>
  );
};
