import { NotifyFnType, ToastItemType } from '../types';

let notify: NotifyFnType;
export const notifyFunction = (notifyFn: NotifyFnType) => {
  notify = notifyFn;
};

export const toast = (args: ToastItemType) => notify({ ...args });
export const info = (args: ToastItemType) => notify({ ...args, status: 'info' });
export const success = (args: ToastItemType) => notify({ ...args, status: 'success' });
export const warning = (args: ToastItemType) => notify({ ...args, status: 'warning' });
export const error = (args: ToastItemType) => notify({ ...args, status: 'error' });
