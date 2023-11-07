import { Flex } from '@core/Flex';

import { StyledControl, StyledTitle, StyledSubtitle, StyledIcon, BaseStyledControl } from './styles';
import type { AccordionControlProps } from '../../types';
import { ChevronIcon } from '../ChevronIcon';

export const Control = ({
  opened,
  variant = 'filled',
  icon,
  title,
  subtitle,
  children,
  openIcon,
  closeIcon,
  unstyled = false,
  accordionControlProps,
  accordionFirstFlexProps,
  accordionSecondFlexProps,
  accordionThirdFlexProps,
  titleProps,
  subtitleProps,
  iconProps,
  animationWrapperProps,
  chevronIconProps,
  ...props
}: AccordionControlProps) => {
  if (unstyled && children) {
    return (
      <BaseStyledControl className="easy_accordion-control" {...accordionControlProps} {...props}>
        {children}
      </BaseStyledControl>
    );
  }

  return (
    <StyledControl className="easy_accordion-control" $opened={opened} $variant={variant} {...accordionControlProps} {...props}>
      <Flex gap={10} justify="space-between" wrap="nowrap" {...accordionFirstFlexProps}>
        {children || (
          <Flex gap={10} align="flex-start" {...accordionSecondFlexProps}>
            {icon && <StyledIcon {...iconProps}>{icon}</StyledIcon>}
            <Flex gap={8} direction="column" align="flex-start" {...accordionThirdFlexProps}>
              <StyledTitle variant="body1" {...titleProps}>
                {title}
              </StyledTitle>
              {subtitle && (
                <StyledSubtitle variant="body3" {...subtitleProps}>
                  {subtitle}
                </StyledSubtitle>
              )}
            </Flex>
          </Flex>
        )}
        <ChevronIcon
          closeIcon={closeIcon}
          openIcon={openIcon}
          opened={opened}
          animationWrapperProps={animationWrapperProps}
          chevronIconProps={chevronIconProps}
        />
      </Flex>
    </StyledControl>
  );
};
