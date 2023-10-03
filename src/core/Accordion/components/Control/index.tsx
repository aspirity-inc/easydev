import { Flex } from '@core/Flex';

import { StyledControl, StyledTitle, StyledSubtitle, StyledIcon } from './styles';
import type { ControlProps } from '../../types';
import { ChevronIcon } from '../ChevronIcon';

export const Control = ({
  opened,
  variant,
  icon,
  title,
  subtitle,
  children,
  openIcon,
  closeIcon,
  ...props
}: ControlProps) => {
  return (
    <StyledControl className="easy_accordion-control" $opened={opened} $variant={variant} {...props}>
      <Flex gap={10} justify="space-between" wrap="nowrap">
        {children || (
          <Flex gap={10} align="flex-start">
            {icon && <StyledIcon>{icon}</StyledIcon>}
            <Flex gap={8} direction="column" align="flex-start">
              <StyledTitle as="span">{title}</StyledTitle>
              {subtitle && <StyledSubtitle>{subtitle}</StyledSubtitle>}
            </Flex>
          </Flex>
        )}
        <ChevronIcon closeIcon={closeIcon} openIcon={openIcon} opened={opened} />
      </Flex>
    </StyledControl>
  );
};
