import { MouseEvent } from 'react';

import ReactSelect, { ActionMeta, GroupBase, MultiValue, OnChangeValue, Props } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';

import 'material-symbols';

import { CustomOption, DropdownIndicator, SearchValueContainer } from './Components';
import {
  ClearValues,
  Multivalue,
  MultivalueContainer,
  MultivalueWrapper,
  RemoveValueButton,
  StyledSelectWrap,
} from './styles.ts';
import { OptionType } from './types.ts';

type SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
  Option,
  IsMulti,
  Group
> &
  AsyncProps<Option, IsMulti, Group> &
  CreatableProps<Option, IsMulti, Group> & {
    rounded?: boolean;
    selectedStatePlaceholder?: string;
    clearButtonText?: string;
    selectType?: 'creatable' | 'async' | 'default';
  };

const selectComponentsOverride = { Option: CustomOption, DropdownIndicator };
const searchComponentsOverride = { Option: CustomOption, DropdownIndicator, ValueContainer: SearchValueContainer };

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  // isSearchable = false,
  rounded,
  noOptionsMessage = () => 'Oops, not found',
  isMulti,
  value,
  onChange,
  placeholder,
  selectedStatePlaceholder,
  components,
  clearButtonText = 'Delete all',
  selectType = 'default',
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const selectComponent = {
    creatable: CreatableSelect,
    async: AsyncSelect,
    default: ReactSelect,
  };
  const Component = selectComponent[selectType];

  const placeholderText = () => ((value as MultiValue<Option>).length ? selectedStatePlaceholder : placeholder);

  const handleRemoveValue = (evt: MouseEvent<HTMLButtonElement>) => {
    if (!onChange) return;

    const { name: buttonName } = evt.currentTarget;
    // @ts-expect-error - Type Option has 'value'
    const removedValue = (value as MultiValue<Option>)?.find((val) => val.value === buttonName);
    if (!removedValue) return;

    onChange(
      // @ts-expect-error - Type Option has 'value'
      (value as MultiValue<Option>)?.filter((val) => val.value !== buttonName) satisfies OnChangeValue<Option, IsMulti>,
      { action: 'remove-value', removedValue } satisfies ActionMeta<Option>
    );
  };

  const handleClear = () => {
    if (!onChange) return;

    onChange([] as OnChangeValue<Option, IsMulti>, {
      action: 'clear',
      removedValues: value as MultiValue<Option>,
    } satisfies ActionMeta<Option>);
  };

  return (
    <StyledSelectWrap $rounded={rounded}>
      <Component
        className="react-select__container"
        classNamePrefix="react-select"
        unstyled={true}
        components={{
          ...(selectType === 'async' ? searchComponentsOverride : selectComponentsOverride),
          ...components,
        }}
        noOptionsMessage={noOptionsMessage}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
        controlShouldRenderValue={!isMulti}
        isClearable={isMulti ? false : props.isClearable}
        placeholder={isMulti ? placeholderText() : placeholder}
        {...props}
      />

      {isMulti ? (
        <MultivalueWrapper>
          {(value as MultiValue<Option>).length ? (
            <ClearValues type="button" onClick={handleClear}>
              {clearButtonText}
            </ClearValues>
          ) : null}
          <MultivalueContainer>
            {(value as OptionType[])?.map((val) => (
              <Multivalue key={val.value}>
                {val.label}
                <RemoveValueButton
                  className="icon material-symbols-rounded"
                  name={val.value}
                  onClick={handleRemoveValue}
                >
                  close
                </RemoveValueButton>
              </Multivalue>
            ))}
          </MultivalueContainer>
        </MultivalueWrapper>
      ) : null}
    </StyledSelectWrap>
  );
};

// const commonSelectProps = {
//   className: 'react-select__container',
//   classNamePrefix: 'react-select',
//   unstyled: true,
//   components: { ...selectComponentsOverride, ...components },
//   noOptionsMessage: noOptionsMessage,
//   isMulti: isMulti,
//   value: value,
//   onChange: onChange,
//   controlShouldRenderValue: !isMulti,
//   isClearable: isMulti ? false : props.isClearable,
//   placeholder: isMulti ? placeholderText() : placeholder,
//   ...props,
// };
