import { CloseIcon } from '@icons';

import { ClearValues, Multivalue, MultivalueContainer, MultivalueWrapper, RemoveValueButton } from './styles.ts';
import type { MultivalueSelectedOptionsType } from '../types.ts';

export const MultivalueSelectedOptions = ({
  handleClear,
  handleRemoveValue,
  clearButtonText,
  value,
  multivalueWrapperProps,
  clearValuesProps,
  multivalueContainerProps,
  multivalueProps,
  removeValueButtonProps,
  closeIconProps,
}: MultivalueSelectedOptionsType) => {
  return (
    <MultivalueWrapper {...multivalueWrapperProps}>
      {value?.length ? (
        <ClearValues type="button" onClick={handleClear} {...clearValuesProps}>
          {clearButtonText}
        </ClearValues>
      ) : null}
      <MultivalueContainer {...multivalueContainerProps}>
        {value?.map((val) => (
          <Multivalue key={val.value} {...multivalueProps}>
            {val.label}
            <RemoveValueButton
              className="icon"
              name={val.value}
              onClick={handleRemoveValue}
              {...removeValueButtonProps}
            >
              <CloseIcon {...closeIconProps} />
            </RemoveValueButton>
          </Multivalue>
        ))}
      </MultivalueContainer>
    </MultivalueWrapper>
  );
};
