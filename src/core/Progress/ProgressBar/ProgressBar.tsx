import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import { Subtitle } from '@core/Typography';

import { ProgressBarWrap, type ProgressBarWrapType, StyledProgressBar, TitleWrap } from './styles.ts';
import { ProgressBarTypeBase } from '../types.ts';

type ProgressBarPropsType = ComponentPropsWithoutRef<'div'> &
  Omit<ProgressBarTypeBase, '$progressColor' | '$progressBackground' | '$size' | '$rounded'> &
  Omit<ProgressBarWrapType, '$isTitle' | '$progressColor'> & {
    customTitle?: ReactNode;
    progressColor?: CSSProperties['color'];
    progressBackground?: CSSProperties['color'];
    size?: 'small' | 'default';
    rounded?: boolean;
  };

export const ProgressBar = ({
  value,
  customTitle,
  progressColor,
  progressBackground,
  size = 'default',
  rounded = true,
  ...props
}: ProgressBarPropsType) => {
  const negativeToZero = value < 0 ? 0 : value;
  const formattedValue = negativeToZero > 100 ? 100 : negativeToZero;

  return (
    <ProgressBarWrap $progressColor={progressColor} className="easy_progressWrap">
      {customTitle ? (
        <TitleWrap>{customTitle}</TitleWrap>
      ) : (
        <TitleWrap>
          <Subtitle level={5} tag="span" className="easy_progressText">
            {formattedValue}%
          </Subtitle>
        </TitleWrap>
      )}
      <StyledProgressBar
        value={formattedValue}
        $progressColor={progressColor}
        $progressBackground={progressBackground}
        $size={size}
        $rounded={rounded}
        {...props}
      />
    </ProgressBarWrap>
  );
};
