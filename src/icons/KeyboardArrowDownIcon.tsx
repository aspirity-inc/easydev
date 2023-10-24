import { StyledSVG } from './styles';
import { IconProps } from './types';

export const KeyboardArrowDownIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </StyledSVG>
  );
};
