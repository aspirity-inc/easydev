export const checkChildrenType = (
  child: React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>,
  type: string
) => (child as any)?.type?.__docgenInfo.displayName === type;
