import { components, ControlProps, GroupBase } from 'react-select';

import { StyledMultivalueContainer } from '../styles.ts';

export const Control = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>(
  props: ControlProps<Option, IsMulti, Group>
) => {
  console.log('props', props);
  console.log('children', props.children);
  console.log('get value', props.getValue());
  const selectedCount = props.getValue().length;
  const isSelectedValues = selectedCount > 0;
  const { selectProps } = props;

  if (!props.isMulti) return <components.Control {...props}>{props.children}</components.Control>;

  return (
    <>
      <components.Control {...props}>
        {!isSelectedValues ? (
          <components.Placeholder {...props}>{selectProps.placeholder}</components.Placeholder>
        ) : (
          <components.Placeholder {...props}>Selected: {selectedCount}</components.Placeholder>
        )}
        <components.DropdownIndicator {...props} children={null} />
      </components.Control>

      {/*<div className="menu-portal" style={{ position: 'relative', height: '3px', border: '1px solid red' }}></div>*/}

      <StyledMultivalueContainer
        className="custom-multivalue__container"
        style={{ height: !isSelectedValues ? 0 : 'auto' }}
      >
        <components.MultiValueContainer {...props} />
      </StyledMultivalueContainer>
    </>
  );
};
