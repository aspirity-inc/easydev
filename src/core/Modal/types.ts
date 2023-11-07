import type { ComponentPropsWithoutRef } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type PortalElement = Element | DocumentFragment | HTMLElement | null;

export type ModalProps = BaseComponentType & {
  open: boolean;
  onClose: () => void;
  portal?: PortalElement;

  modalContentProps?: Pick<BaseComponentType, 'style'>;
};

export type CloseBtnProps = ComponentPropsWithoutRef<'button'>;

export type StyledModalWrapperProps = {
  open: boolean;
  $isPortal: boolean;
};
