import { ReactNode } from 'react';

import { cx } from '@helpers/cx';

import { StyledSubtitle, StyledTab } from './styles';

type TabProps = React.ComponentPropsWithoutRef<'button'> & {
  title: ReactNode;
  disabled?: boolean;
  active: boolean;
  onClick: () => void;
};

export const Tab = ({ title, disabled, active, onClick, ...props }: TabProps) => {
  const isActive = active && !disabled;

  return (
    <StyledTab onClick={onClick} className={cx(isActive && 'active', props.className)} disabled={disabled} {...props}>
      <StyledSubtitle level={4}>{title}</StyledSubtitle>
    </StyledTab>
  );
};
