import type { ReactNode } from 'react';

import { ArrowDropDownIcon } from '@icons';
import { components, type DropdownIndicatorProps, type GroupBase } from 'react-select';


export const DropdownIndicator =
  (icon?: ReactNode) =>
  <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
    props: DropdownIndicatorProps<Option, IsMulti, Group>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <div className="icon-indicator">{icon || <ArrowDropDownIcon />}</div>
      </components.DropdownIndicator>
    );
  };
