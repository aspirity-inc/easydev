import ReactSelect, { components, GroupBase, Props } from 'react-select';

import 'material-symbols';

import { StyledSelectWrap } from './styles.ts';

type SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
  Option,
  IsMulti,
  Group
> & {
  menuHeight?: number;
};

// Who knows how to type components props ¯\_(ツ)_/¯
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomOption = (props) => (
  <div>
    <components.Option {...props} data-disabled={props.disabled}>
      {props.children}
      <div className="icon material-symbols-rounded">done</div>
    </components.Option>
  </div>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const DropdownIndicator = (props) => {
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
        {...props}
        components={{ Option: CustomOption, DropdownIndicator }}
      />
    </StyledSelectWrap>
  );
};
