import { SentimentVerySatisfiedIcon } from '@icons';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Avatar } from '.';
import { sizes } from './styles';

const mockAvatarText = 'Avatar text';

const avatarClassName = 'avatar';

test('Should be online indicator with correct background-color', () => {
  render(
    <EasydevProvider>
      <Avatar online>{mockAvatarText}</Avatar>
    </EasydevProvider>
  );
  const onlineElement = screen.getByText(mockAvatarText).parentNode?.parentNode?.childNodes[1];
  expect(onlineElement).toBeInTheDocument();
  expect(onlineElement).toHaveStyleRule('background-color', lightPalette.primary['500']);
});

test('Should be offline indicator with correct background-color', () => {
  render(
    <EasydevProvider>
      <Avatar online={false}>{mockAvatarText}</Avatar>
    </EasydevProvider>
  );
  const offlineElement = screen.getByText(mockAvatarText).parentNode?.parentNode?.childNodes[1];
  expect(offlineElement).toBeInTheDocument();
  expect(offlineElement).toHaveStyleRule('background-color', lightPalette.surface['300']);
});

test('Should have custom image', () => {
  render(
    <EasydevProvider>
      <Avatar
        alt="photo"
        online
        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b"
      />
    </EasydevProvider>
  );
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
  expect(imgElement).toHaveAttribute('alt', 'photo');
  expect(imgElement).toHaveAttribute(
    'src',
    'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b'
  );
});

test('Should have custom icon', () => {
  const { container } = render(
    <EasydevProvider>
      <Avatar>
        <SentimentVerySatisfiedIcon className="custom_icon" />
      </Avatar>
    </EasydevProvider>
  );
  expect(container.getElementsByClassName('custom_icon').length).toBe(1);
});

test('Should have correct size', () => {
  const { container } = render(
    <EasydevProvider>
      <Avatar className={avatarClassName} size="xl" />
    </EasydevProvider>
  );

  const avatarElement = container.getElementsByClassName(avatarClassName)[0];
  expect(avatarElement).toHaveStyleRule('height', sizes['xl'].avatar);
});

test('Should have correct border-radius', () => {
  const { container } = render(
    <EasydevProvider>
      <Avatar className={avatarClassName} radius={58} />
    </EasydevProvider>
  );

  const avatarElement = container.getElementsByClassName(avatarClassName)[0];
  expect(avatarElement).toHaveStyleRule('border-radius', '58px');
});
