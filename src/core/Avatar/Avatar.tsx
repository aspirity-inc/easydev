import { ReactNode } from 'react';

import 'material-symbols';

import { StyledAvatarWrapper, StyledCenter } from './styles';

type AvatarProps = {
  alt?: string;
  src?: string;
  imageProps?: Record<string, any>;
  radius?: number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  size?: number | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  children?: ReactNode;
};

export const Avatar = ({ alt, src, radius = 'lg', size = 'lg', imageProps, children, ...props }: AvatarProps) => {
  return (
    <StyledAvatarWrapper $size={size} $radius={radius}>
      <StyledCenter>
        {src ? <img {...imageProps} src={src} alt={alt} /> : <div title={alt}>{children || <DefaultAvatarIcon />}</div>}
      </StyledCenter>
    </StyledAvatarWrapper>
  );
};

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
