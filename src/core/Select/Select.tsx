import type { MouseEvent } from 'react';

import ReactSelect, { type ActionMeta, type GroupBase, type MultiValue, type OnChangeValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';

import { MultivalueSelectedOptions } from '@core/Select/Components/MultivalueSelectedOptions.tsx';

import { cx } from '@helpers/cx.ts';

import { CustomOption, DropdownIndicator, SearchValueContainer, Control } from './Components';
import { StyledSelectWrap } from './styles.ts';
import type { EasySelectProps, OptionType } from './types.ts';

const searchComponentsOverride = { ValueContainer: SearchValueContainer };

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
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
  dropdownIcon,
  selectedIcon,
  controlIcon,
  ...props
}: EasySelectProps<Option, IsMulti, Group>) => {
  const selectComponent = {
    creatable: CreatableSelect,
    async: AsyncSelect,
    default: ReactSelect,
  };
  const Component = selectComponent[selectType];

  const placeholderText = () => ((value as MultiValue<Option>)?.length ? selectedStatePlaceholder : placeholder);

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
        className={cx('easy_select-container', 'react-select__container')}
        classNamePrefix="react-select"
        unstyled={true}
        components={{
          ...(selectType === 'async' && searchComponentsOverride),
          DropdownIndicator: DropdownIndicator(dropdownIcon),
          Option: CustomOption(selectedIcon),
          Control: Control(controlIcon),
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

      {isMulti && (
        <MultivalueSelectedOptions
          value={value as OptionType[]}
          clearButtonText={clearButtonText}
          handleClear={handleClear}
          handleRemoveValue={handleRemoveValue}
        />
      )}
    </StyledSelectWrap>
  );
};
