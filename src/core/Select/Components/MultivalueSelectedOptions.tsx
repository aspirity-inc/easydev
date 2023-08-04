import { MouseEvent } from 'react';

import { ClearValues, Multivalue, MultivalueContainer, MultivalueWrapper, RemoveValueButton } from './styles.ts';
import { OptionType } from '../types.ts';

type MultivalueSelectedOptionsType = {
  handleClear: () => void;
  handleRemoveValue: (evt: MouseEvent<HTMLButtonElement>) => void;
  clearButtonText: string;
  value?: OptionType[];
};

export const MultivalueSelectedOptions = ({
  handleClear,
  handleRemoveValue,
  clearButtonText,
  value,
}: MultivalueSelectedOptionsType) => {
  return (
    <MultivalueWrapper>
      {value?.length ? (
        <ClearValues type="button" onClick={handleClear}>
          {clearButtonText}
        </ClearValues>
      ) : null}
      <MultivalueContainer>
        {value?.map((val) => (
          <Multivalue key={val.value}>
            {val.label}
            <RemoveValueButton className="icon material-symbols-rounded" name={val.value} onClick={handleRemoveValue}>
              close
            </RemoveValueButton>
          </Multivalue>
        ))}
      </MultivalueContainer>
    </MultivalueWrapper>
  );
};
