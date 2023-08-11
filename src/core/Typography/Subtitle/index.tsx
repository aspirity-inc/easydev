import { StyledSubtitle, SubtitleLevelType } from './styles.ts';
import { TypographyBaseType } from '../types.ts';

type SubtitleProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'>;
  level?: SubtitleLevelType;
};

export const Subtitle = ({ children, tag, ...props }: SubtitleProps) => {
  return (
    <StyledSubtitle tag={tag || 'h4'} {...props}>
      {children}
    </StyledSubtitle>
  );
};
