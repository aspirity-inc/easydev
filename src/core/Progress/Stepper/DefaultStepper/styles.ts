import { styled } from 'styled-components';

export const Step = styled('div')`
  --bgColor: ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700'])};
  --activeBgColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400']};

  background-color: var(--bgColor);
  height: 10px;
  width: 100%;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition.default};

  &.active {
    background-color: var(--activeBgColor);
  }
`;

export const StyledDefaultStepper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
