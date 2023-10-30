import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const NorthIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
    </StyledSVG>
  );
};
