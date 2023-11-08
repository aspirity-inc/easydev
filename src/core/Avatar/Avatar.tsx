import { cx } from '@helpers/cx.ts';

import { DefaultAvatarIcon, OnlineIndicator, StyledAvatar, StyledCenter } from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  alt,
  src,
  radius = 'lg',
  size = 'lg',
  imageProps,
  online,
  children,
  className,
  avatarCenterProps,
  avatarChildrenProps,
  avatarIndicatorProps,
  ...props
}: AvatarProps) => {
  return (
    <StyledAvatar className={cx(className, 'easy_avatar')} $size={size} $radius={radius} {...props}>
      <StyledCenter {...avatarCenterProps}>
        {src ? (
          <img {...imageProps} src={src} alt={alt} />
        ) : (
          <div {...avatarChildrenProps}>{children || <DefaultAvatarIcon />}</div>
        )}
      </StyledCenter>
      {typeof online !== 'undefined' && <OnlineIndicator $online={online} {...avatarIndicatorProps} />}
    </StyledAvatar>
  );
};
