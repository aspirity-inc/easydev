import type { MainProps } from './types';

export const Main = ({ children, ...props }: MainProps) => <main {...props}>{children}</main>;
