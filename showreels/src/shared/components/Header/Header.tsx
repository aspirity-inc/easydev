import avatar from '@src/assets/img/avatars/avatar1.png';

import { useEffect, useState } from 'react';
import { StyledHeader, StyledSelect, StyledToggle } from './styles';
import { Logo } from '../Logo/Logo';
import { Flex, Avatar, Toggle, useEasyThemeContext } from '@aspirity/easydev';

export type OptionType = {
  label: string;
  value: string;
  isDisabled?: boolean;
  [key: string]: unknown;
};

const options: OptionType[] = [
  { value: 'Makeup', label: 'Makeup' },
  { value: 'Beauty', label: 'Beauty' },
  { value: 'Business', label: 'Business' },
];

import dayToggleBackgroundPath from '@src/assets/img/toggle/day.svg';
import nightToggleBackgroundPath from '@src/assets/img/toggle/night.svg';
import nightToggleInnerBackgroundPath from '@src/assets/img/toggle/night-span.svg';

const dayToggleBackground = `url(${dayToggleBackgroundPath})`;
const nightToggleBackground = `url(${nightToggleBackgroundPath})`;

const dayToggleInnerBackground = '#ffc700';
const nightToggleInnerBackground = `url(${nightToggleInnerBackgroundPath})`;

export const Header = () => {
  const [value, setValue] = useState<OptionType[]>([]);
  const { theme, toggleTheme } = useEasyThemeContext();

  const checked = theme.type === 'light';

  const onChange = () => {
    localStorage.setItem('EASYDEV_THEME', checked ? 'dark' : 'light');
    toggleTheme();
  };

  const ToggleLabel = () => (checked ? 'Light theme' : 'Dark theme');

  const [toggleBackground, setToggleBackground] = useState(
    checked ? dayToggleBackground : nightToggleBackground,
  );
  const [toggleInnerBackground, setToggleInnerBackground] = useState(
    checked ? dayToggleInnerBackground : nightToggleInnerBackground,
  );

  const handleSelectChange = (values: unknown) => {
    setValue(values as OptionType[]);
  };

  const filterOptions = (inputValue: string) => {
    return options.filter((o) =>
      o.label.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<OptionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  useEffect(() => {
    if (checked) {
      setToggleBackground(dayToggleBackground);
      setToggleInnerBackground(dayToggleInnerBackground);
    } else {
      setToggleBackground(nightToggleBackground);
      setToggleInnerBackground(nightToggleInnerBackground);
    }
  }, [checked]);

  return (
    <StyledHeader>
      <Flex justify="space-between">
        <Logo />
        <Flex justify="space-between" gap={16}>
          <StyledSelect
            value={value}
            onChange={handleSelectChange}
            selectedStatePlaceholder={`YourChoice: ${value.length}`}
            loadOptions={promiseOptions}
            defaultOptions
            maxMenuHeight={250}
            minMenuHeight={250}
            rounded
            selectType="async"
            placeholder="I’m searching..."
            dropdownIcon={<></>}
          />
          <Avatar size="sm" alt="photo" src={avatar} />
          <StyledToggle>
            <Toggle
              checked={checked}
              onChange={onChange}
              toggleBackground={toggleBackground}
              toggleInnerBackground={toggleInnerBackground}
              toggleWrapProps={{ style: { width: 48 } }}
              toggleInnerProps={{
                style: { translate: checked ? '150% -50%' : '' },
              }}
              label={ToggleLabel()}
              reversed
            />
          </StyledToggle>
        </Flex>
      </Flex>
    </StyledHeader>
  );
};
