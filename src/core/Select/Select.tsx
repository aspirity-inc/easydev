import { MouseEvent } from 'react';

import ReactSelect, { ActionMeta, GroupBase, MultiValue, OnChangeValue, Props } from 'react-select';

import 'material-symbols';

import { CustomOption } from './Components/CustomOption.tsx';
import { DropdownIndicator } from './Components/DropdownIndicator.tsx';
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
> & {
  rounded?: boolean;
  selectedPlaceholder?: string;
};

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  isSearchable = false,
  rounded,
  noOptionsMessage = () => 'Oops, not found',
  isMulti,
  value,
  onChange,
  placeholder,
  selectedPlaceholder,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
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

  const placeholderText = () => ((value as MultiValue<Option>).length ? selectedPlaceholder : placeholder);

  return (
    <StyledSelectWrap $rounded={rounded}>
      <ReactSelect
        className="react-select__container"
        classNamePrefix="react-select"
        unstyled
        isSearchable={isSearchable}
        components={{ Option: CustomOption, DropdownIndicator }}
        noOptionsMessage={noOptionsMessage}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
        controlShouldRenderValue={!isMulti}
        isClearable={isMulti ? false : undefined}
        placeholder={isMulti ? placeholderText() : placeholder}
        {...props}
      />

      {isMulti ? (
        <MultivalueWrapper>
          {(value as MultiValue<Option>).length ? (
            <ClearValues type="button" onClick={handleClear}>
              Delete all
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
