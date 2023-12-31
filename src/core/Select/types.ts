import type { MouseEvent, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import type { GroupBase, Props } from 'react-select';
import type { AsyncProps } from 'react-select/async';
import type { CreatableProps } from 'react-select/creatable';

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> &
  AsyncProps<Option, IsMulti, Group> &
  CreatableProps<Option, IsMulti, Group> & {
    rounded?: boolean;
    selectedStatePlaceholder?: string;
    clearButtonText?: string;
    selectType?: 'creatable' | 'async' | 'default';
  };

export type OptionType = {
  label: string;
  value: string;
  isDisabled?: boolean;
  [key: string]: unknown;
};

export type MultivalueSelectedOptionsType = {
  handleClear: () => void;
  handleRemoveValue: (evt: MouseEvent<HTMLButtonElement>) => void;
  clearButtonText: string;
  value?: OptionType[];

  multivalueWrapperProps?: Pick<BaseComponentType, 'style'>;
  clearValuesProps?: Pick<BaseComponentType, 'style'>;
  multivalueContainerProps?: Pick<BaseComponentType, 'style'>;
  multivalueProps?: Pick<BaseComponentType, 'style'>;
  removeValueButtonProps?: Pick<BaseComponentType, 'style'>;
  closeIconProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledSelectType = {
  $rounded?: boolean;
};

export type EasySelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = SelectProps<Option, IsMulti, Group> & {
  dropdownIcon?: ReactNode;
  selectedIcon?: ReactNode;
  controlIcon?: ReactNode;

  selectWrapProps?: Pick<BaseComponentType, 'style'>;
  multivalueWrapperProps?: Pick<BaseComponentType, 'style'>;
  clearValuesProps?: Pick<BaseComponentType, 'style'>;
  multivalueContainerProps?: Pick<BaseComponentType, 'style'>;
  multivalueProps?: Pick<BaseComponentType, 'style'>;
  removeValueButtonProps?: Pick<BaseComponentType, 'style'>;
  closeIconProps?: Pick<BaseComponentType, 'style'>;
};
