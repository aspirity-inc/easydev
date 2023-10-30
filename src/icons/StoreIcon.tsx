import { StyledSVG } from './styles';
import type { IconProps } from './types';

export const StoreIcon = (props: IconProps) => {
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
        d="M160-720v-80h640v80H160Zm0 560v-240h-40v-80l40-200h640l40 200v80h-40v240h-80v-240H560v240H160Zm80-80h240v-160H240v160Zm-38-240h556-556Zm0 0h556l-24-120H226l-24 120Z"
      />
    </StyledSVG>
  );
};
