import { Subtitle } from '@core/Typography';

import { ProgressBarWrap, StyledProgressBar, TitleWrap } from './styles.ts';
import type { ProgressBarPropsType } from './types.ts';

export const ProgressBar = ({
  value,
  customTitle,
  size = 'default',
  rounded = true,
  ...props
}: ProgressBarPropsType) => {
  const negativeToPositive = value < 0 ? 0 : value;
  const formattedValue = negativeToPositive > 100 ? 100 : negativeToPositive;

  return (
    <ProgressBarWrap className="easy_progressWrap">
      {customTitle ? (
        <TitleWrap as="span" className="easy_progress--titleWrap">
          {customTitle}
        </TitleWrap>
      ) : (
        <TitleWrap>
          <Subtitle level={5} as="span" className="easy_progressText">
            {formattedValue}%
          </Subtitle>
        </TitleWrap>
      )}
      <StyledProgressBar
        className="easy_progressBar"
        value={formattedValue}
        $size={size}
        $rounded={rounded}
        {...props}
      />
    </ProgressBarWrap>
  );
};
