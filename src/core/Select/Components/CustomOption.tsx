import Highlighter from 'react-highlight-words';
import { components, GroupBase, OptionProps } from 'react-select';

import { StyledOption } from './styles.ts';

export const CustomOption = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { selectProps } = props;
  return (
    <StyledOption>
      <components.Option {...props}>
        <Highlighter
          searchWords={[selectProps.inputValue]}
          textToHighlight={props.children as string}
          highlightClassName="easy-option--highlight"
        />
        <div className="icon material-symbols-rounded">done</div>
      </components.Option>
    </StyledOption>
  );
};
