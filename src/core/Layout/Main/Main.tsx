import type { MainProps } from './types';

export const Main = ({ children, ...props }: MainProps) => (
  <main className="easy_main" {...props}>
    {children}
  </main>
);
