import { Children, type ReactElement } from 'react';

import { StyledAvatarGroup, StyledGroupItem } from './styles';
import type { AvatarGroupProps } from './types';
import { sizes } from '../styles';
import type { AvatarProps } from '../types';

export const AvatarGroup = ({ spacing, max = 5, children, ...otherProps }: AvatarGroupProps) => {
  let firstChildProps: AvatarProps = {};

  // Spacing - the value negative margin of avatar.
  // Let's take as the spacing the value from the prop or value equals to 50% of the width of the avatar.
  const calcSpacing = () => {
    if (spacing) return spacing;
    else {
      const childSize = firstChildProps?.size || 'lg';

      if (typeof childSize === 'number') {
        return childSize / 2;
      } else {
        const value = Number.parseInt(sizes[childSize].avatar);
        return value / 2;
      }
    }
  };

  const childArray = Children.toArray(children) as ReactElement<AvatarProps>[];
  const maxAvatars = max > 0 ? max : 0;
  const alwaysShowAvatars = Math.max(maxAvatars, 2);
  const extraAvatars = Math.max(childArray.length - alwaysShowAvatars, 0);
  const StyledChildArray = childArray?.slice(0, alwaysShowAvatars).map((child, index) => {
    // Save child size for spacing calculation, and also set same size to each avatar
    if (index === 0) {
      firstChildProps = child.props;
    }

    return (
      <StyledGroupItem key={index} $spacing={calcSpacing()} {...child.props} size={firstChildProps?.size || 'lg'} />
    );
  });

  return (
    <StyledAvatarGroup className="easy_avatarGroup" $spacing={calcSpacing()} {...otherProps}>
      {StyledChildArray}
      {extraAvatars ? (
        <StyledGroupItem className="easy_avatarGroup-item" $spacing={calcSpacing()} {...firstChildProps} src="">
          {`+${extraAvatars}`}
        </StyledGroupItem>
      ) : null}
    </StyledAvatarGroup>
  );
};
