import { styled } from 'styled-components';

export const Step = styled('div')`
  background-color: var(--secondaryColor);
  height: 10px;
  width: 100%;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition.default};

  &.active {
    background-color: var(--mainColor);
  }
`;

export const StyledDefaultStepper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
`;
