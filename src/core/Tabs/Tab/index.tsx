import { ReactNode } from 'react';

type TabProps = React.ComponentPropsWithoutRef<'button'> & {
  tabKey: number | string;
  title: string;
  disabled?: boolean;
  children: ReactNode | ReactNode[];
};

export const Tab = (_props: TabProps) => {
  return null;
};
