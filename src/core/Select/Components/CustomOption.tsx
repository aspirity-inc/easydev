import type { ReactNode } from 'react';

import Highlighter from 'react-highlight-words';
import { components, type GroupBase, type OptionProps } from 'react-select';

import { StyledOption } from './styles.ts';

export const CustomOption =
  (icon?: ReactNode) =>
  <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
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
          <div className="icon">{icon || <div className="material-symbols-rounded">done</div>}</div>
        </components.Option>
      </StyledOption>
    );
  };
