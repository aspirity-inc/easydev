import { subtitleLevelVariants, subtitleTagVariants } from '../constants';
import type { TypographyBaseType } from '../types';

export type LevelVariantsType = (typeof subtitleLevelVariants)[number];

export type StyledSubtitleProps = {
  $level?: LevelVariantsType;
};

export type TagVariantsType = (typeof subtitleTagVariants)[number];
export type SubtitleProps = TypographyBaseType & {
  as?: keyof Pick<HTMLElementTagNameMap, TagVariantsType>;
  level?: LevelVariantsType;
};
