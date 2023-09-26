import { Fragment } from 'react';

import { Label } from '@core/Controls/styles.ts';
import type { ControlWrapperType } from '@core/Controls/types.ts';

import { cx } from '@helpers/cx.ts';

export const ControlWrapper = ({ label, children, className, ...props }: ControlWrapperType) =>
  label ? (
    <Label as="label" className={cx('easy_control-label', className)} {...props}>
      {children}
    </Label>
  ) : (
    <Fragment>{children}</Fragment>
  );
