import { useId } from 'react';

import { AccordionItemType } from '@core/Accordion';
import { Box } from '@core/Box';

import { StyledBox, StyledAccordion, StyledControl, CollapsedChevronWrapper } from './styles';
import { useMenuAccordionState } from '../../hooks/useMenuAccordionState';
import { StyledIcon, StyledLabel, StyledMenuItemContent } from '../../styles';
import type { MenuItemType, SubMenuProps } from '../../types';
import { ChevronArrow } from '../ChevronArrow';
import { MenuItem } from '../MenuItem';

export const SubMenu = ({ children, disabled, icon, activeId, collapsed, onChange, ...props }: SubMenuProps) => {
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
              <MenuItem
                key={item.id}
                {...item}
                isSubmenuItem={true}
                collapsed={collapsed}
                hovered={hovered}
                activeId={activeId}
                onChange={onChange}
              />
            );
          })}
        </Box>
      ),
    };
    return [accordion];
  };

  return (
    <StyledBox as="li" className="easy_dropdown-menu-item" onMouseLeave={handleMouseLeave}>
      <StyledAccordion
        items={createAccordion()}
        value={opened}
        onChange={onChangeValue}
        unstyledControl={true}
        $opened={opened ? true : false}
        $collapsed={delayCollapsed}
        $hovered={hovered}
      ></StyledAccordion>
    </StyledBox>
  );
};
