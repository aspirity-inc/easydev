import { render } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { AvatarGroup } from '.';
import { Avatar } from '..';
import { sizes } from '../styles';

const avatarGroupClassName = 'avatar-group';

test('Should be correct AvatarGroup padding-left (depends from 1st child size)', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup className={avatarGroupClassName}>
        <Avatar size="sm" />
        <Avatar />
        <Avatar size="xxl" />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  expect(avatarGroupElement).toHaveStyleRule('padding-left', `${Number.parseInt(sizes['sm'].avatar) / 2}px`);
});

test('Should be correct AvatarGroup custom padding-left and every avatar should have size of first element', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup className={avatarGroupClassName} spacing={40}>
        <Avatar size="sm" />
        <Avatar size="xxl" />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  expect(avatarGroupElement).toHaveStyleRule('padding-left', '40px');

  expect(avatarGroupElement.childNodes[0]).toHaveStyleRule('width', sizes['sm'].avatar);
  expect(avatarGroupElement.childNodes[0]).toHaveStyleRule('height', sizes['sm'].avatar);

  expect(avatarGroupElement.childNodes[1]).toHaveStyleRule('width', sizes['sm'].avatar);
  expect(avatarGroupElement.childNodes[1]).toHaveStyleRule('height', sizes['sm'].avatar);
});

test('Should be correct margin-left between children (depends from 1st child size)', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup className={avatarGroupClassName}>
        <Avatar size="sm" />
        <Avatar size="xxl" />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  expect(avatarGroupElement.childNodes[0]).toHaveStyleRule(
    'margin-left',
    `-${Number.parseInt(sizes['sm'].avatar) / 2}px`
  );
  expect(avatarGroupElement.childNodes[1]).toHaveStyleRule(
    'margin-left',
    `-${Number.parseInt(sizes['sm'].avatar) / 2}px`
  );
});

test('Should be correct custom margin-left between children', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup className={avatarGroupClassName} spacing={55}>
        <Avatar size="sm" />
        <Avatar size="xxl" />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  expect(avatarGroupElement.childNodes[0]).toHaveStyleRule('margin-left', '-55px');
  expect(avatarGroupElement.childNodes[1]).toHaveStyleRule('margin-left', '-55px');
});

test('Should have 4 children', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup max={3} className={avatarGroupClassName}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  // (max + 1) because 1 avatar shows counter
  expect(avatarGroupElement.childNodes.length).toBe(4);
});

test('Should have 7 children', () => {
  const { container } = render(
    <EasydevProvider>
      <AvatarGroup max={7} className={avatarGroupClassName}>
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </AvatarGroup>
    </EasydevProvider>
  );

  const avatarGroupElement = container.getElementsByClassName(avatarGroupClassName)[0];
  // (max) because max is equal to the total count of avatars
  expect(avatarGroupElement.childNodes.length).toBe(7);
});
