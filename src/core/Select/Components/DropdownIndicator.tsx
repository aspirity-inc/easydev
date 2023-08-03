import { components, DropdownIndicatorProps, GroupBase } from 'react-select';

import 'material-symbols';

export const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: DropdownIndicatorProps<Option, IsMulti, Group>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="icon-indicator material-symbols-rounded">arrow_drop_down</div>
    </components.DropdownIndicator>
  );
};
