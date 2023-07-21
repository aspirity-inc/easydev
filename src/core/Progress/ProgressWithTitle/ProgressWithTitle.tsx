import { ComponentPropsWithoutRef } from 'react';

import { StyledProgress, StyledProgressInfo } from './styles.ts';

type ProgressWithTitlePropsType = ComponentPropsWithoutRef<'div'> & {
  value: number;
  title: string;
};

export const ProgressWithTitle = ({ value, title, ...props }: ProgressWithTitlePropsType) => {
  const formattedValue = value > 100 ? 100 : value;

  return (
    <div className="easy_progressWithTitle-wrap">
      <StyledProgressInfo level={3} tag="span" className="easy_progressWithTitle-info">
        <span>{value}%</span> <span>{title}</span>
      </StyledProgressInfo>
      <StyledProgress value={formattedValue} {...props} />
    </div>
  );
};
