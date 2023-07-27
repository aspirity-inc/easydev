import { createContext } from 'react';

export type ModalContextProps = {
  onClose?: () => void;
  colorful?: boolean;
};

const defaultValue = {
  colorful: false,
};

export const ModalContext = createContext<ModalContextProps>(defaultValue);
