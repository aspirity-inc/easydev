import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const KeyboardDoubleArrowLeftIcon = (props: IconProps) => {
  return (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      className="easy-icon"
      {...props}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"
      />
    </StyledSVG>
  );
};
