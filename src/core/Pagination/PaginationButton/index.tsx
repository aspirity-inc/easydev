import {
  KeyboardArrowLeftIcon,
  KeyboardArrowRightIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from '@icons';

import { StyledIcon, StyledPaginationButton } from './styles';
import type { PaginationButtonProps } from '..';

const defaultIcons = {
  prev: <KeyboardArrowLeftIcon />,
  next: <KeyboardArrowRightIcon />,
  first: <KeyboardDoubleArrowLeftIcon />,
  last: <KeyboardDoubleArrowRightIcon />,
};

export const PaginationButton = ({
  variant,
  icons,
  paginationButtonProps,
  paginationButtonIconProps,
  ...props
}: PaginationButtonProps) => (
  <StyledPaginationButton className="easy_pagination-btn" {...props} {...paginationButtonProps}>
    <StyledIcon {...paginationButtonIconProps}>
      {(icons && icons[variant]) || defaultIcons[variant]}
    </StyledIcon>
  </StyledPaginationButton>
);
