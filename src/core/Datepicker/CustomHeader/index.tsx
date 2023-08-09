import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { StyledSelectedButton, StyledHeader, StyledArrowButton } from './styles';
import { DatePickerMode } from '../Datepicker';

export const CustomHeader =
  (mode: DatePickerMode, setMode: (mode: DatePickerMode) => void) => (props: ReactDatePickerCustomHeaderProps) => {
    const handleClickPrev = () => {
      if (mode === 'year') props.decreaseYear();
      else props.decreaseMonth();
    };

    const handleClickNext = () => {
      if (mode === 'year') props.increaseYear();
      else props.increaseMonth();
    };

    const HeaderContent = () => {
      if (mode === 'date')
        return (
          <StyledSelectedButton onClick={() => setMode('year')}>
            {props.monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </StyledSelectedButton>
        );

      if (mode === 'year') return 'Select year';
      if (mode === 'month') return props.date.getFullYear();
    };

    return (
      <StyledHeader>
        <StyledArrowButton className={' material-symbols-rounded'} aria-label="Previous" onClick={handleClickPrev}>
          keyboard_arrow_left
        </StyledArrowButton>
        {HeaderContent()}
        <StyledArrowButton className={'material-symbols-rounded'} aria-label="Next" onClick={handleClickNext}>
          keyboard_arrow_right
        </StyledArrowButton>
      </StyledHeader>
    );
  };
