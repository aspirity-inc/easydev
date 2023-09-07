import { CardProps } from '.';
import { StyledCard, StyledMedia, StyledContent } from './styles';

export const Card = ({ variant, direction = 'column', media, borderedMedia = false, children }: CardProps) => {
  return (
    <StyledCard $variant={variant} $direction={direction} align={'flex-start'}>
      {media && (
        <StyledMedia $direction={direction} $borderedMedia={borderedMedia}>
          {media}
        </StyledMedia>
      )}
      <StyledContent>{children}</StyledContent>
    </StyledCard>
  );
};
