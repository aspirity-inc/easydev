import { createVar, fallbackVar, style } from '@vanilla-extract/css';

export const sidePaddingBtn = createVar();
export const minWidthContent = createVar();

export const container = style({
  margin: 0,
  border: 'none',
  padding: `16px ${fallbackVar(sidePaddingBtn, '29px')}`,
  backgroundColor: '#25DBA7',
  color: '#FFFFFF',
  fontSize: '13px',
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 1.9,
});

export const content = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '9px',

  minWidth: fallbackVar(minWidthContent, '118px'), // добавила, чтобы кнопки с иконками и без выглядели одинакового размера, но мне не ок
});
