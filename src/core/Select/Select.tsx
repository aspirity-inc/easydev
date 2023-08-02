import { ReactNode } from 'react';

import ReactSelect, { GroupBase, Props } from 'react-select';

import 'material-symbols';

import { ClearIndicator } from './Components/Clear.tsx';
import { Control } from './Components/Control.tsx';
import { CustomOption } from './Components/CustomOption.tsx';
import { DropdownIndicator } from './Components/DropdownIndicator.tsx';
import { MultiValueRemove } from './Components/MultivalueRemove.tsx';
import { StyledFilters, StyledSelectWrap } from './styles.ts';

type SelectProps<Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>> = Props<
  Option,
  IsMulti,
  Group
> & {
  rounded?: boolean;
  filters?: ReactNode | ReactNode[];
};

export const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  isSearchable = false,
  rounded,
  filters,
  noOptionsMessage = () => 'Oops, not found',
  isMulti,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  return (
    <StyledSelectWrap $rounded={rounded}>
      <ReactSelect
        className="react-select__container"
        classNamePrefix="react-select"
        unstyled
        isSearchable={isSearchable}
        components={{ Option: CustomOption, DropdownIndicator, Control, ClearIndicator, MultiValueRemove }}
        noOptionsMessage={noOptionsMessage}
        isMulti={isMulti}
        {...props}
      />
      <>вот здесь</>
      {filters && <StyledFilters>{filters}</StyledFilters>}
    </StyledSelectWrap>
  );
};
