import 'material-symbols';

import { StyledIcon, StyledPaginationButton } from './styles';
import type { PaginationButtonProps } from '..';

const defaultIcons = {
  prev: 'keyboard_arrow_left',
  next: 'keyboard_arrow_right',
  first: 'keyboard_double_arrow_left',
  last: 'keyboard_double_arrow_right',
};

export const PaginationButton = ({ variant, icons, ...props }: PaginationButtonProps) => (
  <StyledPaginationButton {...props}>
    <StyledIcon>
      {(icons && icons[variant]) || <div className="material-symbols-rounded">{defaultIcons[variant]}</div>}
    </StyledIcon>
  </StyledPaginationButton>
);
