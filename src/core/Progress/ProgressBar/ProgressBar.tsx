import { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { ProgressBarWrap, type ProgressBarWrapType, StyledProgressBar, StyledValue } from './styles.ts';
import { ProgressBarTypeBase } from '../types.ts';

type ProgressBarPropsType = ComponentPropsWithoutRef<'div'> &
  Omit<ProgressBarTypeBase, '$progressColor' | '$progressBackground'> &
  Omit<ProgressBarWrapType, '$label' | '$progressColor'> & {
    label?: boolean;
    progressColor?: CSSProperties['color'];
    progressBackground?: CSSProperties['color'];
  };

export const ProgressBar = ({
  value,
  label = true,
  progressColor,
  progressBackground,
  ...props
}: ProgressBarPropsType) => {
  const negativeToZero = value < 0 ? 0 : value;
  const formattedValue = negativeToZero > 100 ? 100 : negativeToZero;

  return (
    <ProgressBarWrap $label={label} $progressColor={progressColor} className="easy_progressWrap">
      {label && (
        <StyledValue level={5} tag="span" className="easy_progressText">
          {formattedValue}%
        </StyledValue>
      )}
      <StyledProgressBar
        value={formattedValue}
        $progressColor={progressColor}
        $progressBackground={progressBackground}
        {...props}
      />
    </ProgressBarWrap>
  );
};
