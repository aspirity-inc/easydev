import { style } from '@vanilla-extract/css';

export const container = style({
  margin: 0,
  border: 'none',
  padding: '16px 29px',
  backgroundColor: '#25DBA7',
  color: '#FFFFFF',
  fontSize: '13px',
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 1.4,
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '9px',

  minWidth: '118px', // добавила, чтобы кнопки с иконками и без выглядели одинакового размера, но мне не ок
});
