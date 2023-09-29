import type { ReactNode } from 'react';

import { components, type DropdownIndicatorProps, type GroupBase } from 'react-select';

import 'material-symbols';

export const DropdownIndicator =
  (icon?: ReactNode) =>
  <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
    props: DropdownIndicatorProps<Option, IsMulti, Group>
  ) => {
    return (
      <components.DropdownIndicator {...props}>
        <div className="icon-indicator">{icon || <div className="material-symbols-rounded">arrow_drop_down</div>}</div>
      </components.DropdownIndicator>
    );
  };
