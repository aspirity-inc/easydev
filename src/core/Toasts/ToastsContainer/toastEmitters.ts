import type { NotifyFnType, ToastItemType } from '../types';

let notify: NotifyFnType;
export const notifyFunction = (notifyFn: NotifyFnType) => {
  notify = notifyFn;
};

export const toast = (args: ToastItemType) => notify({ ...args });
