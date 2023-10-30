import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const KeyboardArrowUpIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
    </StyledSVG>
  );
};
