import { ComponentPropsWithoutRef } from 'react';

import { type ProgressBarType, ProgressBarWrap, type ProgressBarWrapType, StyledValue } from './styles.ts';
import { StyledProgressBar } from '../styles.ts';

type ProgressBarPropsType = ComponentPropsWithoutRef<'div'> &
  ProgressBarType &
  Omit<ProgressBarWrapType, '$label'> & {
    label?: boolean;
  };

export const ProgressBar = ({ value, label = true, ...props }: ProgressBarPropsType) => {
  const formattedValue = value > 100 ? 100 : value;

  return (
    <ProgressBarWrap $label={label} className="easy_progressWrap">
      {label && (
        <StyledValue level={5} tag="span" className="easy_progressText">
          {formattedValue}%
        </StyledValue>
      )}
      <StyledProgressBar value={formattedValue} {...props} />
    </ProgressBarWrap>
  );
};
