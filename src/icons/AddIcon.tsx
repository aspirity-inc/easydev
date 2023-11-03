import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const AddIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </StyledSVG>
  );
};