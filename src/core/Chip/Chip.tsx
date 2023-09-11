import { useState, BaseSyntheticEvent, cloneElement, isValidElement } from 'react';

import { StyledChipLabel } from './styles';
import { ChipProps } from './types';

export const Chip = (props: ChipProps) => {
  const {
    label,
    variant = 'filled',
    disabled,
    defaultChecked,
    bgColor,
    color,
    onChange,
    chipContent,
    ...otherProps
  } = props;
  const [active, setActive] = useState(defaultChecked);

  const handleClick = (event: BaseSyntheticEvent) => {
    if (disabled) return;

    // When a label contains an input, the handleClick is called twice, once on the input
    // and once on the label. So, avoid double call the function when label contains input
    const labelElement = event.currentTarget;
    const inputElement = labelElement.querySelector('input');
    if (!(event.target.tagName.toLowerCase() === 'label' && inputElement)) {
      setActive((active) => !active);
    }

    onChange && onChange(event);
  };

  // Add disabled prop to content tag
  const enhancedChipContent = isValidElement(chipContent)
    ? cloneElement(chipContent, {
        ...chipContent.props,
        disabled,
        defaultChecked,
      })
    : chipContent;

  return (
    <StyledChipLabel
      $variant={variant}
      $bgColor={bgColor}
      $color={color}
      disabled={disabled}
      $active={active}
      onClick={handleClick}
      {...otherProps}
    >
      {enhancedChipContent}
      {label}
    </StyledChipLabel>
  );
};
