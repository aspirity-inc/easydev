import { styleVariants } from "@vanilla-extract/css";
import { vars } from "../Theme/globalTheme.css.ts";

// TODO: base style with media etc
export const title = styleVariants({
  'h1': {
    fontSize: '56px',
    fontWeight: vars.typography.weight['800'],
    lineHeight: '1.4'
  },
  'h2': {
    fontSize: '48px',
    fontWeight: vars.typography.weight['600'],
    lineHeight: '1.3'
  },
  'h3': {
    fontSize: '32px',
    fontWeight: vars.typography.weight['700'],
    lineHeight: '1.3'
  },
  'h4': {
    fontSize: '24px',
    fontWeight: vars.typography.weight['800'],
    lineHeight: '1.3'
  },
  'h5': {
    fontSize: '18px',
    fontWeight: vars.typography.weight['700'],
    lineHeight: '1.2'
  },
  'h6': {
    fontSize: '16px',
    fontWeight: vars.typography.weight['700'],
    lineHeight: '1.2'
  },
})

export const titleType = styleVariants({
  'success': {
    color: vars.colors.success.main
  },
  'warning': {
    color: vars.colors.warning.main
  },
  'error': {
    color: vars.colors.error.main
  },
  'default': {
    color: vars.colors.text
  }
})
