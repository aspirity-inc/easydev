import type { ReactPortal, ReactElement, JSXElementConstructor } from 'react';

export const checkChildrenType = (
  child: ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>>,
  type: string
) => (child as any)?.type?.__docgenInfo?.displayName === type;
