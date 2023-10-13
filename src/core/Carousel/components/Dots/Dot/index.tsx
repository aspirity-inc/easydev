import { StyledDot } from './styles';
import type { DotProps } from '../../../types';

export const Dot = ({ active, onClick }: DotProps) => {
  return <StyledDot className="easy_carousel-dot" $active={active} onClick={onClick} />;
};
