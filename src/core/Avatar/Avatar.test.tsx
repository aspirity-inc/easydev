import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';
import { lightPalette } from '@core/Theme/themePalette';

import { Avatar } from '.';

const CustomIcon = () => (
  <div className="material-symbols-outlined" style={{ display: 'block' }}>
    sentiment_very_satisfied
  </div>
);

const mockAvatarText = 'Avatar text';

test('Should be in document', () => {
  render(
    <EasydevProvider>
      <Avatar>{mockAvatarText}</Avatar>
    </EasydevProvider>
  );
  expect(screen.getByText(mockAvatarText)).toBeInTheDocument();
});

test('Should be default avatar icon', () => {
  const { container } = render(
    <EasydevProvider>
      <Avatar />
    </EasydevProvider>
  );
  expect(screen.getByText('person')).toBeInTheDocument();
  expect(container.getElementsByClassName('material-symbols-outlined').length).toBe(1);
});

test('Should be online indicator with correct background-color', () => {
  render(
    <EasydevProvider>
      <Avatar online>{mockAvatarText}</Avatar>
    </EasydevProvider>
  );
  const onlineElement = screen.getByText(mockAvatarText).parentNode?.parentNode?.childNodes[1];
  expect(onlineElement).toHaveStyleRule('background-color', lightPalette.primary['500']);
});

test('Should be offline indicator with correct background-color', () => {
  render(
    <EasydevProvider>
      <Avatar online={false}>{mockAvatarText}</Avatar>
    </EasydevProvider>
  );
  const onlineElement = screen.getByText(mockAvatarText).parentNode?.parentNode?.childNodes[1];
  expect(onlineElement).toHaveStyleRule('background-color', lightPalette.surface['300']);
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
        <CustomIcon />
      </Avatar>
    </EasydevProvider>
  );
  expect(screen.getByText('sentiment_very_satisfied')).toBeInTheDocument();
  expect(container.getElementsByClassName('material-symbols-outlined').length).toBe(1);
});
