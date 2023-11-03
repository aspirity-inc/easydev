import { useId } from 'react';

import { AccordionItemType } from '@core/Accordion';
import { Box } from '@core/Box';

import { StyledAccordion, StyledControl, CollapsedChevronWrapper, StyledAccordionWrapper } from './styles';
import { useMenuAccordionState } from '../../hooks/useMenuAccordionState';
import { StyledIcon, StyledLabel, StyledMenuItemContent } from '../../styles';
import type { MenuItemType, SubMenuProps } from '../../types';
import { ChevronArrow } from '../ChevronArrow';
import { SidebarMenuItem } from '../SidebarMenuItem';

export const SubMenu = ({
  children,
  disabled,
  icon,
  activeId,
  collapsed,
  onChange,
  maxWidth,
  ...props
}: SubMenuProps) => {
  const id = useId();
  const {
    hovered,
    opened,
    onChange: onChangeValue,
    delayCollapsed,
    handleMouseMove,
    handleMouseLeave,
    showLabel,
    collapsedAnimation,
  } = useMenuAccordionState({
    id,
    collapsed,
  });

  const createAccordion = () => {
    const accordion: AccordionItemType = {
      id,
      control: (
        <StyledControl
          $disabled={disabled}
          $opened={opened ? true : false}
          $collapsed={collapsed}
          $hovered={hovered}
          $collapsedAnimation={collapsedAnimation}
          $maxWidth={maxWidth}
        >
          <StyledMenuItemContent gap={8} wrap="nowrap">
            <StyledIcon onMouseMove={handleMouseMove}>{icon}</StyledIcon>
            {showLabel && (
              <>
                <StyledLabel>{props.label}</StyledLabel>
                <CollapsedChevronWrapper>
                  <ChevronArrow opened={opened ? true : false} />
                </CollapsedChevronWrapper>
              </>
            )}
          </StyledMenuItemContent>
        </StyledControl>
      ),
      panel: (
        <Box as="ul">
          {children?.map((item: MenuItemType) => {
            return (
              <SidebarMenuItem
                key={item.id}
                {...item}
                isSubmenuItem={true}
                collapsed={collapsed}
                hovered={hovered}
                activeId={activeId}
                onChange={onChange}
                maxWidth={maxWidth}
              />
            );
          })}
        </Box>
      ),
    };
    return [accordion];
  };

  return (
    <StyledAccordionWrapper
      as="li"
      className="easy_sidebar-dropdown-submenu"
      onMouseLeave={handleMouseLeave}
      $maxWidth={maxWidth}
      $hovered={hovered}
    >
      <StyledAccordion
        items={createAccordion()}
        value={opened}
        onChange={onChangeValue}
        unstyledControl={true}
        $opened={opened ? true : false}
        $collapsed={delayCollapsed}
        $hovered={hovered}
      ></StyledAccordion>
    </StyledAccordionWrapper>
  );
};
