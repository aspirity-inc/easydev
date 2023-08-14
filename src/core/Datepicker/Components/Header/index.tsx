import { ReactDatePickerCustomHeaderProps } from 'react-datepicker';

import { DatePickerMode } from '@core/Datepicker/Datepicker';

import { StyledSelectedButton, StyledHeader, StyledArrowButton } from './styles';

export const Header =
  (
    mode: DatePickerMode,
    setMode: (mode: DatePickerMode) => void,
    yearModeTitle?: string,
    locale?: string,
    localeOptions?: {
      [key: string]: string;
    }
  ) =>
  (props: ReactDatePickerCustomHeaderProps) => {
    const { decreaseYear, decreaseMonth, increaseYear, increaseMonth, monthDate, date } = props;

    const handleClickPrev = () => (mode === 'year' ? decreaseYear() : decreaseMonth());
    const handleClickNext = () => (mode === 'year' ? increaseYear() : increaseMonth());

    const HeaderContent = () => {
      if (mode === 'date')
        return (
          <StyledSelectedButton onClick={() => setMode('year')}>
            {monthDate.toLocaleString(
              locale || 'en-US',
              localeOptions || {
                month: 'long',
                year: 'numeric',
              }
            )}
          </StyledSelectedButton>
        );

      if (mode === 'year') return yearModeTitle || 'Select year';
      if (mode === 'month') return date.getFullYear();
    };

    return (
      <StyledHeader>
        <StyledArrowButton className="material-symbols-rounded" aria-label="Previous" onClick={handleClickPrev}>
          keyboard_arrow_left
        </StyledArrowButton>
        {HeaderContent()}
        <StyledArrowButton className="material-symbols-rounded" aria-label="Next" onClick={handleClickNext}>
          keyboard_arrow_right
        </StyledArrowButton>
      </StyledHeader>
    );
  };
