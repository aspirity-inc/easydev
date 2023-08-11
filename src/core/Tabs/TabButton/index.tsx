import { cx } from '@helpers/cx';

import { StyledSubtitle, StyledTab } from './styles';

type keyType = number | string;

type TabButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  eventKey: keyType;
  title: string;
  disabled?: boolean;
  active: boolean;
  handleChangeKey: (key: keyType) => void;
};

export const TabButton = ({ title, disabled, active, eventKey, handleChangeKey, ...props }: TabButtonProps) => {
  const isActive = active && !disabled;

  return (
    <StyledTab
      onClick={() => handleChangeKey(eventKey)}
      className={cx(isActive && 'active', props.className)}
      disabled={disabled}
      {...props}
    >
      <StyledSubtitle level={4}>{title}</StyledSubtitle>
    </StyledTab>
  );
};
