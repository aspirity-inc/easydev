import { EllipsisType, StyledText, TextVariant } from '@core/Typography/Text/styles.ts';
import { TypographyBaseType } from '@core/Typography/types.ts';

type TextProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, 'p' | 'span'>;
  variant?: TextVariant;
  ellipsis?: EllipsisType;
};

export const Text = ({ children, tag, ellipsis, ...props }: TextProps) => {
  return (
    <StyledText tag={tag || 'p'} ellipsis={ellipsis} {...props}>
      {children}
    </StyledText>
  );
};
