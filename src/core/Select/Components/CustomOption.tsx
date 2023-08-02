import { components, GroupBase, OptionProps } from 'react-select';

import { HighlightValue, OptionContentWrapper } from '../styles.ts';

export const CustomOption = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: OptionProps<Option, IsMulti, Group>
) => {
  const { selectProps } = props;
  return (
    <div>
      <components.Option {...props}>
        <OptionContentWrapper>
          {props.children}
          {typeof props.children === 'string' ? (
            <HighlightValue>{props.children?.slice(0, selectProps.inputValue.length)}</HighlightValue>
          ) : null}
        </OptionContentWrapper>
        <div className="icon material-symbols-rounded">done</div>
      </components.Option>
    </div>
  );
};
