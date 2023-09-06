import { StyledBadge, StyledBadgeContent } from './styles';
import { BadgeProps } from './types';

export const Badge = ({ color = 'success', textColor, size = 'md', fullWidth, children, ...props }: BadgeProps) => {
  return (
    <StyledBadge {...props} $color={color} $textColor={textColor} $size={size} $fullWidth={fullWidth}>
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};
