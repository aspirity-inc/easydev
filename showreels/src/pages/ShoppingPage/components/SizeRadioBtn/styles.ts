import { styled } from 'styled-components';

export const StyledRadioWrapper = styled('div')<{ $content: string }>`
  .easy_radio-wrap {
    border: none;
    background-color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface[300]
        : theme.colors.surface[800]};
  }

  .easy_radio-wrap::before {
    content: '${({ $content }) => $content}';
    position: absolute;
    top: 0;
    left: 0;

    width: 24px;
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface[700]
        : theme.colors.surface[300]};

    text-align: center;
    line-height: 24px;
  }

  .easy_radio-item--inner {
    position: relative;
  }

  .easy_radio-item--inner::before {
    content: '${({ $content }) => $content}';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 24px;
    height: 24px;

    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.primary[700]
        : theme.colors.primary[400]};

    text-align: center;
    line-height: 24px;

    transform: translate(-50%, -50%);
    background-color: ${({ theme }) =>
      theme.type === 'light'
        ? theme.colors.surface[50]
        : theme.colors.surface[900]};
    border-radius: 50%;
    border: 1px solid
      ${({ theme }) =>
        theme.type === 'light'
          ? theme.colors.primary[700]
          : theme.colors.primary[400]};
  }
`;
