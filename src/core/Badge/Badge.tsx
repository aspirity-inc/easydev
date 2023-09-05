import { StyledBadge, StyledBadgeContent } from './styles';
import { BadgeProps } from './types';

export const Badge = ({ color = 'green', size = 'md', fullWidth, children, ...props }: BadgeProps) => {
  return (
    <StyledBadge {...props} $color={color} $size={size} $fullWidth={fullWidth}>
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};
