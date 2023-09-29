import type { ReactNode } from 'react';

import { type ControlProps, type GroupBase, components } from 'react-select';

export const Control =
  (icon?: ReactNode) =>
  <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
    props: ControlProps<Option, IsMulti, Group>
  ) =>
    (
      <components.Control {...props}>
        {icon}
        {props.children}
      </components.Control>
    );
