import { components, GroupBase, MultiValueRemoveProps } from 'react-select';

export const MultiValueRemove = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: MultiValueRemoveProps<Option, IsMulti, Group>
) => {
  return (
    <components.MultiValueRemove {...props}>
      <div className="icon material-symbols-rounded">close</div>
    </components.MultiValueRemove>
  );
};
