import { cx } from '@helpers/cx';

import { StyledSubtitle, StyledTab } from './styles';
import type { TabProps } from './types';

export const Tab = ({ title, disabled, active, onClick, ...props }: TabProps) => {
  const isActive = active && !disabled;

  return (
    <StyledTab
      onClick={onClick}
      className={cx(isActive && 'active', 'easy_tab', props.className)}
      $disabled={disabled}
      {...props}
    >
      <StyledSubtitle level={4}>{title}</StyledSubtitle>
    </StyledTab>
  );
};
