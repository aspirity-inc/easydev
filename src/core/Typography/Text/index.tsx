import { EllipsisType, StyledText, TextBodyLevel, TextVariant } from '@core/Typography/Text/styles.ts';
import { TypographyBaseType } from '@core/Typography/types.ts';

type TextProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, 'p' | 'span' | 'div'>;
  variant?: TextVariant;
  bodyLevel?: TextBodyLevel;
  ellipsis?: EllipsisType;
};

export const Text = ({ children, variant, tag, type, bodyLevel, ellipsis, ...props }: TextProps) => {
  return (
    <StyledText
      tag={tag || 'span'}
      variant={variant || 'body'}
      type={type}
      bodyLevel={bodyLevel}
      ellipsis={ellipsis}
      {...props}
    >
      {children}
    </StyledText>
  );
};
