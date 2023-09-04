import 'material-symbols';

import { OnlineIndicator, StyledAvatarWrapper, StyledCenter } from './styles';
import { AvatarProps } from './types';

export const Avatar = ({
  alt,
  src,
  radius = 'lg',
  size = 'lg',
  imageProps,
  online,
  children,
  ...otherProps
}: AvatarProps) => {
  return (
    <StyledAvatarWrapper $size={size} $radius={radius} {...otherProps}>
      <StyledCenter>
        {src ? <img {...imageProps} src={src} alt={alt} /> : <div>{children || <DefaultAvatarIcon />}</div>}
      </StyledCenter>
      {typeof online !== 'undefined' && <OnlineIndicator $online={online} />}
    </StyledAvatarWrapper>
  );
};

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
