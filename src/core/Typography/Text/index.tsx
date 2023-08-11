import { EllipsisType, StyledText, TextVariant } from './styles.ts';
import { TypographyBaseType } from '../types.ts';

type TextProps = TypographyBaseType & {
  tag?: keyof Pick<HTMLElementTagNameMap, 'p' | 'span'>;
  variant?: TextVariant;
  ellipsis?: EllipsisType;
};

export const Text = ({ children, tag, ...props }: TextProps) => {
  return (
    <StyledText tag={tag || 'p'} {...props}>
      {children}
    </StyledText>
  );
};
