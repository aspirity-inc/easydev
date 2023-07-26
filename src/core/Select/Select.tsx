import ReactSelect, { components, DropdownIndicatorProps, GroupBase, OptionProps, Props } from 'react-select';

import 'material-symbols';

import { StyledSelectWrap } from './styles.ts';

type SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
  Option,
  IsMulti,
  Group
> & {
  menuHeight?: number;
};

const CustomOption = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: OptionProps<Option, IsMulti, Group>
) => (
  <div>
    <components.Option {...props}>
      {props.children}
      <div className="icon material-symbols-rounded">done</div>
    </components.Option>
  </div>
);

const DropdownIndicator = <
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

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  menuHeight = 300,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return (
    <StyledSelectWrap $menuHeight={menuHeight}>
      <ReactSelect
        className="react-select-container"
        classNamePrefix="react-select"
        unstyled
        components={{ Option: CustomOption, DropdownIndicator }}
        {...props}
      />
    </StyledSelectWrap>
  );
};
//
