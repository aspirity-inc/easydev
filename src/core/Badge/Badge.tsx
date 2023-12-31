import { StyledBadge, StyledBadgeContent } from './styles';
import type { BadgeProps } from './types';

export const Badge = ({
  color = 'success',
  textColor,
  size = 'md',
  fullWidth,
  children,
  badgeContentProps,
  ...props
}: BadgeProps) => {
  return (
    <StyledBadge
      className="easy_badge"
      {...props}
      $color={color}
      $textColor={textColor}
      $size={size}
      $fullWidth={fullWidth}
    >
      <StyledBadgeContent className="easy_badge-content" as="span" {...badgeContentProps}>
        {children}
      </StyledBadgeContent>
    </StyledBadge>
  );
};
