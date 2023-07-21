import { ComponentPropsWithoutRef } from 'react';

import {
  type ProgressBarType,
  ProgressBarWrap,
  type ProgressBarWrapType,
  StyledProgressBar,
  StyledValue,
} from './styles.ts';

type ProgressBarPropsType = ComponentPropsWithoutRef<'div'> &
  ProgressBarType &
  Omit<ProgressBarWrapType, '$label'> & {
    label?: boolean;
  };

export const ProgressBar = ({ value, label = true, color, ...props }: ProgressBarPropsType) => {
  const formattedValue = value > 100 ? 100 : value;

  return (
    <ProgressBarWrap $label={label} className="easy_progressWrap" color={color}>
      {label && (
        <StyledValue level={5} tag="span" className="easy_progressText">
          {formattedValue}%
        </StyledValue>
      )}
      <StyledProgressBar value={formattedValue} {...props} />
    </ProgressBarWrap>
  );
};
