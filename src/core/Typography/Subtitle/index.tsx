import { StyledSubtitle, SubtitleLevelType } from '@core/Typography/Subtitle/styles.ts';
import { TypographyBaseType } from '@core/Typography/types.ts';

type SubtitleProps = TypographyBaseType & {
  tag: keyof Pick<HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'>;
  level?: SubtitleLevelType;
};

export const Subtitle = ({ children, tag, className, type, level, ...props }: SubtitleProps) => {
  return (
    <StyledSubtitle tag={tag} className={className} type={type} level={level || 1} {...props}>
      {children}
    </StyledSubtitle>
  );
};
