import { CardProps } from '.';
import { StyledCard, StyledMedia } from './styles';

export const Card = ({ variant, direction = 'column', media, borderedMedia = false, children }: CardProps) => {
  return (
    <StyledCard $variant={variant} $direction={direction} gap={16} align={'flex-start'}>
      {media && (
        <StyledMedia $direction={direction} $borderedMedia={borderedMedia}>
          {media}
        </StyledMedia>
      )}
      {children}
    </StyledCard>
  );
};
