import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const DoneIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </StyledSVG>
  );
};
