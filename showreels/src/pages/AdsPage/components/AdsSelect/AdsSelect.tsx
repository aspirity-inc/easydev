import { StyledSelect } from './styles';

const options = [
  {
    label: 'Chocolate',
    value: 'chocolate',
  },
  {
    label: 'Strawberry',
    value: 'strawberry',
  },
  {
    label: 'Vanilla',
    value: 'vanilla',
  },
];

export const AdsSelect = () => {
  return (
    <StyledSelect
      maxMenuHeight={250}
      minMenuHeight={250}
      options={options}
      placeholder="Select option"
    />
  );
};
