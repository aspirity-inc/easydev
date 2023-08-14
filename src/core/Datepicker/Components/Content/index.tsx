import { Button } from '@core/Button';

import { StyledButtons } from './styles';

type ContentProps = {
  handleCancel: (event: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement, Event> | undefined) => void;
  handleApply: () => void;
};

export const Content = ({ handleApply, handleCancel }: ContentProps) => (
  <StyledButtons>
    <Button variant="secondary" rounded="lg" size="sm" onClick={handleCancel}>
      Cancel
    </Button>
    <Button rounded="lg" size="sm" onClick={handleApply}>
      Apply
    </Button>
  </StyledButtons>
);
