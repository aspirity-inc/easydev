import { type JSXElementConstructor, type ReactElement, type ReactPortal, cloneElement } from 'react';

export const addPropsToChild = (
  child: ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>>,
  props: Record<any, any>
) => {
  return cloneElement(child, {
    ...child.props,
    ...props,
  });
};
