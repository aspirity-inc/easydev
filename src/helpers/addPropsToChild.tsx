import { cloneElement } from 'react';

export const addPropsToChild = (
  child: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
  props: Record<any, any>
) => {
  return cloneElement(child, {
    ...child.props,
    ...props,
  });
};
