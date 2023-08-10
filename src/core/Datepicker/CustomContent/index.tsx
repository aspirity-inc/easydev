import { MouseEvent } from 'react';

import { Button } from '@core/Button';

import { StyledButtons } from './styles';
import { DatePickerMode } from '../Datepicker';

type CustomContentProps = {
  mode: DatePickerMode;
  onChange: (
    date: Date | null,
    event: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement, Event> | undefined
  ) => void;
  setOpen: (value: boolean) => void;
};

export const CustomContent = ({ mode, onChange, setOpen }: CustomContentProps) => {
  // Что должна делать кнопка Cancel?
  const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
    onChange(null, e);
    setOpen(false);
  };

  const handleApply = () => {
    setOpen(false);
  };

  return (
    <>
      {mode === 'date' && (
        <StyledButtons>
          <Button variant="secondary" rounded="lg" size="sm" onClick={handleCancel}>
            Cancel
          </Button>
          <Button rounded="lg" size="sm" onClick={handleApply}>
            Apply
          </Button>
        </StyledButtons>
      )}
    </>
  );
};
