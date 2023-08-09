import { MouseEvent } from 'react';

import { CalendarContainer, CalendarContainerProps } from 'react-datepicker';

import { Button } from '@core/Button';

import { StyledButtons } from './styles';
import { DatePickerMode } from '../Datepicker';

export const CustomContainer =
  (
    mode: DatePickerMode,
    onChange: (
      date: Date | null,
      event: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement, Event> | undefined
    ) => void,
    setOpen: (value: boolean) => void
  ) =>
  (props: CalendarContainerProps) => {
    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
      onChange(null, e);
      setOpen(false);
    };

    const handleApply = () => {
      setOpen(false);
    };

    return (
      <CalendarContainer className={props.className}>
        <div style={{ position: 'relative' }}>{props.children}</div>

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
      </CalendarContainer>
    );
  };
