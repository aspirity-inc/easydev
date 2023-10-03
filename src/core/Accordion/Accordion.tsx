import { Children, isValidElement, useState } from 'react';

import { Box } from '@core/Box';

import { addPropsToChild } from '@helpers/addPropsToChild';
import { checkChildrenType } from '@helpers/checkChildrenType';

import type { AccordionProps } from './types';

export const Accordion = ({
  variant = 'filled',
  duration = 400,
  openIcon,
  closeIcon,
  openIndex = -1,
  handleOpenIndex,
  children,
  ...props
}: AccordionProps) => {
  const [openedIndex, setOpenedIndex] = useState<number>(openIndex);

  const handleClick = (index: number) => {
    return () => {
      setOpenedIndex(openedIndex === index ? -1 : index);
      handleOpenIndex && handleOpenIndex(openedIndex === index ? -1 : index);
    };
  };

  const childrenWithProps = Children.toArray(children).map((child, index) => {
    if (isValidElement(child) && checkChildrenType(child, 'AccordionItem')) {
      const accordionItemChildren = Children.toArray(child.props.children).map((child) => {
        if (isValidElement(child) && checkChildrenType(child, 'Control')) {
          return addPropsToChild(child, {
            onClick: handleClick(index),
            opened: index === openedIndex,
            variant,
            openIcon,
            closeIcon,
          });
        } else if (isValidElement(child) && checkChildrenType(child, 'Panel')) {
          return addPropsToChild(child, { opened: index === openedIndex, variant, duration });
        }

        return child;
      });

      return addPropsToChild(child, { children: accordionItemChildren });
    }
  });

  return (
    <Box className="easy_accordion" {...props}>
      {childrenWithProps}
    </Box>
  );
};
