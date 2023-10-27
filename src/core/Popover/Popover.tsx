import { useState } from 'react';

import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';

import { Subtitle } from '@core/Typography';

import { StyledArrow, StyledBody, StyledTitle, StyledPopover, TriggerPopoverWrapper } from './styles';
import type { PopoverProps, DivElementType, SpanElementType } from './types';

export const Popover = ({
  placement,
  title,
  body,
  openOnHover,
  inline,
  offset: userOffset,
  children,
  ...props
}: PopoverProps) => {
  const [referenceElement, setReferenceElement] = useState<DivElementType>(null);
  const [popperElement, setPopperElement] = useState<SpanElementType>(null);
  const [arrowElement, setArrowElement] = useState<SpanElementType>(null);

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
      { name: 'offset', options: { offset: [0, userOffset || 8] } },
    ],
  });

  const togglePopover = () => {
    if (!openOnHover) popperElement?.toggleAttribute('data-show');
  };

  const showPopover = () => {
    if (openOnHover) popperElement?.setAttribute('data-show', 'true');
  };

  const hidePopover = () => {
    if (openOnHover) popperElement?.removeAttribute('data-show');
  };

  return (
    <>
      <TriggerPopoverWrapper
        className="easy_popover-triggerContainer"
        as={inline ? 'span' : 'div'}
        onClick={togglePopover}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
        ref={setReferenceElement}
      >
        {children}
      </TriggerPopoverWrapper>

      <StyledPopover
        className="easy_popover"
        $isTitled={Boolean(title)}
        style={styles.popper}
        {...attributes.popper}
        ref={setPopperElement}
        {...props}
      >
        {title && (
          <StyledTitle className="easy_popover-title">
            <Subtitle as="span" level={5}>
              {title}
            </Subtitle>
          </StyledTitle>
        )}
        <StyledBody className="easy_popover-body">{body}</StyledBody>
        <StyledArrow ref={setArrowElement} style={styles.arrow} />
      </StyledPopover>
    </>
  );
};

const getArrowPaddings = (refPopper: SpanElementType, refArrow: SpanElementType, placement: Placement) => {
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
