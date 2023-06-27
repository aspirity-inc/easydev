import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '9px',
  margin: 0,
  border: 'none',
  backgroundColor: '#25DBA7',
  color: '#FFFFFF',
  fontSize: '13px',
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 1.9,
});

export const sizeType = styleVariants({
  sm: {
    padding: '16px 8px',
    minWidth: '120px',
  },
  lg: {
    padding: '16px 30px',
    minWidth: '180px',
  },
});

export const reversed = style({
  flexDirection: 'row-reverse',
});
