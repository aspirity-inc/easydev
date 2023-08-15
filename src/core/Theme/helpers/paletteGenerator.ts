import { shade, tint } from 'polished';

export const paletteGenerator = (color: string) => ({
  main: color,
  50: tint(1, color),
  100: tint(0.4, color),
  200: tint(0.3, color),
  300: tint(0.2, color),
  400: tint(0.1, color),
  500: color,
  600: shade(0.1, color),
  700: shade(0.2, color),
  800: shade(0.3, color),
  900: shade(0.85, color),
});
