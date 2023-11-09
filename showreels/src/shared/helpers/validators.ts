export const validateEmail = (value: string): boolean => {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return regex.test(value);
};

export const validatePhone = (value: string): boolean => {
  const deleteLetters = value.replace(/\D/g, '');
  const regex = /^\d{11}$/;
  return regex.test(deleteLetters);
};
