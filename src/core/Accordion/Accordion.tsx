import { useUncontrolled } from '@hooks';

import { Box } from '@core/Box';

import { Control } from './components/Control';
import { Panel } from './components/Panel';
import type { AccordionItemValue, AccordionProps, AccordionValue } from './types';

export const Accordion = <Multiple extends boolean = false>({
  items,
  multiple = false as Multiple,
  variant = 'filled',
  duration = 400,
  openIcon,
  closeIcon,
  value,
  onChange,
  ...props
}: AccordionProps<Multiple>) => {
  const defaultValue = (multiple ? [] : '') as AccordionItemValue<Multiple>;
  const [openedItem, setOpenedItem] = useUncontrolled({
    value,
    defaultValue,
    onChange,
  });

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

  const isOpenedItem = (value: AccordionValue, disabled?: boolean) => {
    if (disabled) return false;

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

  return (
    <Box className="easy_accordion" {...props}>
      {items.map((item) => {
        const isOpened = isOpenedItem(item.id, item.disabled);
        return (
          <Box key={item.id} className="easy_accordion-item" {...props}>
            <Control
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              onClick={handleClick(item.id)}
              opened={isOpened}
              variant={variant}
              openIcon={openIcon}
              closeIcon={closeIcon}
              disabled={item.disabled}
            >
              {item.control}
            </Control>
            <Panel opened={isOpened} variant={variant} duration={duration}>
              {item.panel}
            </Panel>
          </Box>
        );
      })}
    </Box>
  );
};
