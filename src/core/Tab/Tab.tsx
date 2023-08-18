import { ReactNode } from 'react';

import { cx } from '@helpers/cx';

import { StyledSubtitle, StyledTab } from './styles';

type keyType = number | string;

type TabProps = React.ComponentPropsWithoutRef<'button'> & {
  tabKey: keyType;
  title: ReactNode;
  disabled?: boolean;
  active: boolean;
  onClick: (key: keyType) => void;
};

export const Tab = ({ title, disabled, active, tabKey, onClick, ...props }: TabProps) => {
  const isActive = active && !disabled;

  return (
    <StyledTab onClick={onClick} className={cx(isActive && 'active', props.className)} disabled={disabled} {...props}>
      <StyledSubtitle level={4}>{title}</StyledSubtitle>
    </StyledTab>
  );
};
