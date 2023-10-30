import { StyledDot, StyledUserDot } from './styles';
import type { DotProps } from '../../../types';

export const Dot = ({ active, onClick, icons }: DotProps) => {
  if (!icons) {
    return <StyledDot className="easy_carousel-dot" $active={active} onClick={onClick} />;
  }

  return <StyledUserDot onClick={onClick}>{active ? icons.active : icons.default}</StyledUserDot>;
};
