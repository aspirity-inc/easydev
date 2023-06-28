export const noUndefined = (values: Record<string, string>): Record<string, string> => {
  const copyValues = { ...values };
  for (const key in copyValues) {
    if (copyValues[key] === '') {
      delete copyValues[key];
    }
  }
  return copyValues;
};
