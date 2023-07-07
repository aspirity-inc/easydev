import styled, { css } from 'styled-components';

type LabelProps = {
  reversed?: boolean;
};

export const StyledLabel = styled('label')<LabelProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  max-width: fit-content;

  ${({ reversed }) => {
    return (
      reversed &&
      css`
        flex-direction: row-reverse;
        justify-content: space-between;
      `
    );
  }}
`;
