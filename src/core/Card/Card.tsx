import { CardProps } from '.';
import { StyledCard, StyledMedia, StyledContent } from './styles';

export const Card = ({
  variant,
  direction = 'column',
  media,
  maxWidth,
  borderedMedia = false,
  children,
}: CardProps) => {
  return (
    <StyledCard
      className="easy_card"
      $variant={variant}
      $direction={direction}
      align={'flex-start'}
      $maxWidth={maxWidth}
    >
      {media && (
        <StyledMedia className="easy_card-media" $direction={direction} $borderedMedia={borderedMedia}>
          {media}
        </StyledMedia>
      )}
      <StyledContent className="easy_card-content">{children}</StyledContent>
    </StyledCard>
  );
};
