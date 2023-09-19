import 'material-symbols';

import { OnlineIndicator, StyledAvatar, StyledCenter } from './styles';
import type { AvatarProps } from './types';

export const Avatar = ({
  alt,
  src,
  radius = 'lg',
  size = 'lg',
  imageProps,
  online,
  color,
  bgColor,
  children,
  ...otherProps
}: AvatarProps) => {
  return (
    <StyledAvatar
      className="easy_avatar"
      $size={size}
      $radius={radius}
      $color={color}
      $bgColor={bgColor}
      {...otherProps}
    >
      <StyledCenter>
        {src ? <img {...imageProps} src={src} alt={alt} /> : <div>{children || <DefaultAvatarIcon />}</div>}
      </StyledCenter>
      {typeof online !== 'undefined' && <OnlineIndicator $online={online} />}
    </StyledAvatar>
  );
};

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
