import { CloseIcon } from '@icons';

import { ClearValues, Multivalue, MultivalueContainer, MultivalueWrapper, RemoveValueButton } from './styles.ts';
import type { MultivalueSelectedOptionsType } from '../types.ts';

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
            <RemoveValueButton className="icon" name={val.value} onClick={handleRemoveValue}>
              <CloseIcon />
            </RemoveValueButton>
          </Multivalue>
        ))}
      </MultivalueContainer>
    </MultivalueWrapper>
  );
};
