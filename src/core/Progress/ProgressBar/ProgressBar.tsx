import { Subtitle } from '@core/Typography';

import { ProgressBarWrap, StyledProgressBar, TitleWrap } from './styles.ts';
import type { ProgressBarPropsType } from './types.ts';

export const ProgressBar = ({
  value,
  customTitle,
  progressColor,
  progressBackground,
  size = 'default',
  rounded = true,
  ...props
}: ProgressBarPropsType) => {
  const negativeToPositive = value < 0 ? 0 : value;
  const formattedValue = negativeToPositive > 100 ? 100 : negativeToPositive;

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
