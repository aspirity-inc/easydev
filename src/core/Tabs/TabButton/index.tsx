import { cx } from '@helpers/cx';

import { StyledSubtitle, StyledTab } from './styles';

type keyType = number | string;

type TabButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  tabKey: keyType;
  title: string;
  disabled?: boolean;
  active: boolean;
  onClick: (key: keyType) => void;
};

export const TabButton = ({ title, disabled, active, tabKey, onClick, ...props }: TabButtonProps) => {
  const isActive = active && !disabled;

  return (
    <StyledTab
      onClick={() => onClick(tabKey)}
      className={cx(isActive && 'active', props.className)}
      disabled={disabled}
      {...props}
    >
      <StyledSubtitle level={4}>{title}</StyledSubtitle>
    </StyledTab>
  );
};
