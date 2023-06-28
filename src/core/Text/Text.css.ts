import { createVar, fallbackVar, style, createTheme } from '@vanilla-extract/css';

export const brandColor = createVar();

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
  },
  font: {
    body: 'arial',
  },
});

export const container = style({
  color: fallbackVar(brandColor, 'yellow'),
  paddingTop: '3px',
  backgroundColor: vars.color.brand,
});
