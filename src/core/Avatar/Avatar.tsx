import 'material-symbols';

import { cx } from '@helpers/cx.ts';

import { OnlineIndicator, StyledAvatar, StyledCenter } from './styles';
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
  ...props
}: AvatarProps) => {
  return (
    <StyledAvatar className={cx(className, 'easy_avatar')} $size={size} $radius={radius} {...props}>
      <StyledCenter>
        {src ? <img {...imageProps} src={src} alt={alt} /> : <div>{children || <DefaultAvatarIcon />}</div>}
      </StyledCenter>
      {typeof online !== 'undefined' && <OnlineIndicator $online={online} />}
    </StyledAvatar>
  );
};

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
