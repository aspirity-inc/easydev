import { SearchIcon } from '@icons';
import { components, GroupBase, ValueContainerProps } from 'react-select';

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
      <SearchIcon data-testid="search" />
      <components.ValueContainer {...props}>{props.children}</components.ValueContainer>
    </StyledSearchValue>
  );
};
