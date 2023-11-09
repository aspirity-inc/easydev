import styled, { createGlobalStyle } from 'styled-components';

export const StyledContent = styled('div')`
  /* overflow: hidden; */
  flex: 1;
  min-height: calc(100vh);
  padding: 72px 119px 150px 84px;
  background-color: ${({ theme }) =>
    theme.type === 'light'
      ? theme.colors.surface[200]
      : theme.colors.surface[800]};
`;

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: "Roboto Flex", sans-serif;
		scrollbar-gutter: stable;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.surface[50]};
  }

  button {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }
`;
