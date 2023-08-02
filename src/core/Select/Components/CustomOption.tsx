import { components, GroupBase, OptionProps } from 'react-select';

export const CustomOption = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => (
  <div>
    <components.Option {...props}>
      {props.children}
      <div className="icon material-symbols-rounded">done</div>
    </components.Option>
  </div>
);
