import type { CardProps } from '.';
import { StyledCard, StyledContent, StyledMedia } from './styles';

export const Card = ({
  variant,
  direction = 'column',
  media,
  borderedMedia = false,
  children,
  cardMediaProps,
  cardContentProps,
  ...props
}: CardProps) => {
  return (
    <StyledCard className="easy_card" $variant={variant} $direction={direction} align={'flex-start'} {...props}>
      {media && (
        <StyledMedia
          className="easy_card-media"
          $direction={direction}
          $borderedMedia={borderedMedia}
          {...cardMediaProps}
        >
          {media}
        </StyledMedia>
      )}
      <StyledContent className="easy_card-content" {...cardContentProps}>
        {children}
      </StyledContent>
    </StyledCard>
  );
};
