import { Children, type ReactNode, isValidElement, useState } from 'react';

import { Box } from '@core/Box';

import { addPropsToChild } from '@helpers/addPropsToChild';
import { checkChildrenType } from '@helpers/checkChildrenType';

import type { AccordionItemValue, AccordionProps, AccordionValue } from './types';

export const Accordion = <Multiple extends boolean = false>({
  multiple = false as Multiple,
  variant = 'filled',
  duration = 400,
  openIcon,
  closeIcon,
  value,
  onChange,
  children,
  ...props
}: AccordionProps<Multiple>) => {
  const defaultOpenItem = (multiple ? [] : '') as AccordionItemValue<Multiple>;
  const [openedItem, setOpenedItem] = useState<AccordionItemValue<Multiple>>(value || defaultOpenItem);

  const getOpenedItemAsArray = (openedItem: AccordionValue[], value: AccordionValue) => {
    return (
      openedItem.includes(value)
        ? openedItem.filter((selectedValue) => selectedValue !== value)
        : [...openedItem, value]
    ) as AccordionItemValue<Multiple>;
  };

  const getOpenedItemAsString = (openedItem: AccordionValue, value: AccordionValue) => {
    return (value === openedItem ? '' : value) as AccordionItemValue<Multiple>;
  };

  const isOpenedItem = (value: AccordionValue) => {
    return Array.isArray(openedItem) ? openedItem.includes(value) : value === openedItem;
  };

  const handleClick = (value: AccordionValue) => {
    return () => {
      const nextOpenedItem = Array.isArray(openedItem)
        ? getOpenedItemAsArray(openedItem, value)
        : getOpenedItemAsString(openedItem, value);

      setOpenedItem(nextOpenedItem);
      onChange && onChange(nextOpenedItem);
    };
  };

  const pushPropsToControlAndPanel = (child: ReactNode, value: AccordionValue, disabled: boolean) => {
    if (!isValidElement(child)) return null;

    const opened = !disabled && isOpenedItem(value);

    if (checkChildrenType(child, 'Control')) {
      return addPropsToChild(child, {
        onClick: handleClick(value),
        opened,
        variant,
        openIcon,
        closeIcon,
        disabled,
      });
    }

    if (checkChildrenType(child, 'Panel')) {
      return addPropsToChild(child, { opened, variant, duration });
    }
  };

  const childrenWithProps = Children.toArray(children).map((child, index) => {
    if (!(isValidElement(child) && checkChildrenType(child, 'AccordionItem'))) return null;

    const itemValue = child.props.itemId ?? String(index);
    const isDisabled = child.props.disabled;

    const accordionItemChildren = Children.toArray(child.props.children).map((child) =>
      pushPropsToControlAndPanel(child, itemValue, isDisabled)
    );

    return addPropsToChild(child, { children: accordionItemChildren });
  });

  return (
    <Box className="easy_accordion" {...props}>
      {childrenWithProps}
    </Box>
  );
};
