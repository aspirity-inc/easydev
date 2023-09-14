import { useState } from 'react';

import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';

import { Subtitle } from '@core/Typography';

import { StyledArrow, StyledBody, StyledTitle, StyledPopover, TriggerPopoverWrapper } from './styles';
import type { PopoverProps, ElementType } from './types';

export const Popover = ({ placement, title, body, children }: PopoverProps) => {
  const [referenceElement, setReferenceElement] = useState<ElementType>(null);
  const [popperElement, setPopperElement] = useState<ElementType>(null);
  const [arrowElement, setArrowElement] = useState<ElementType>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          padding: getArrowPaddings(popperElement, arrowElement, placement),
        },
      },
      { name: 'offset', options: { offset: [0, 8] } },
    ],
  });

  const togglePopover = () => popperElement?.toggleAttribute('data-show');

  return (
    <>
      <TriggerPopoverWrapper onClick={togglePopover} ref={setReferenceElement}>
        {children}
      </TriggerPopoverWrapper>

      <StyledPopover $isTitled={Boolean(title)} style={styles.popper} {...attributes.popper} ref={setPopperElement}>
        {title && (
          <StyledTitle>
            <Subtitle tag="span" level={5}>
              {title}
            </Subtitle>
          </StyledTitle>
        )}
        <StyledBody>{body}</StyledBody>
        <StyledArrow ref={setArrowElement} style={styles.arrow} />
      </StyledPopover>
    </>
  );
};

const getArrowPaddings = (refPopper: ElementType, refArrow: ElementType, placement: Placement) => {
  const defaultPaddings = {
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
  };

  if (refPopper && refArrow) {
    //Arrow has three position: start, center and end, center is default.
    //If the size of the popper is less than three arrow sizes, then it does not make sense to move the arrow

    if (refPopper?.offsetHeight > refArrow?.offsetHeight * 3) {
      const topBottomPadding = refPopper?.offsetHeight - refArrow?.offsetHeight * 3;
      switch (placement) {
        case 'left-start':
        case 'right-start': {
          defaultPaddings.bottom = topBottomPadding;
          break;
        }
        case 'left-end':
        case 'right-end': {
          defaultPaddings.top = topBottomPadding;
          break;
        }
      }
    }

    if (refPopper?.offsetWidth > refArrow?.offsetWidth * 3) {
      const leftRightPadding = refPopper?.offsetWidth - refArrow?.offsetWidth * 3;
      switch (placement) {
        case 'top-start':
        case 'bottom-start': {
          defaultPaddings.right = leftRightPadding;
          break;
        }
        case 'top-end':
        case 'bottom-end': {
          defaultPaddings.left = leftRightPadding;
          break;
        }
      }
    }
  }
  return defaultPaddings;
};
