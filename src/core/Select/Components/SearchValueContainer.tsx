import { components, GroupBase, ValueContainerProps } from 'react-select';

import 'material-symbols';

import { StyledSearchValue } from './styles.ts';

export const SearchValueContainer = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: ValueContainerProps<Option, IsMulti, Group>
) => {
  return (
    <StyledSearchValue>
      <div className="material-symbols-rounded">search</div>
      <components.ValueContainer {...props}>{props.children}</components.ValueContainer>
    </StyledSearchValue>
  );
};
