import { styled } from 'styled-components';

export const NormalizedDiv = styled.div`
  @-ms-viewport {
    width: device-width;
  }
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  main,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    touch-action: manipulation;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    line-height: 1;
    font-family: sans-serif;
    text-align: left;
  }
  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::after,
  blockquote::before,
  q::after,
  q::before {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  caption {
    caption-side: bottom;
  }
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
  }
  pre {
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  abbr[title] {
    border-bottom: 0;
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
  }
  address {
    font-style: normal;
    line-height: inherit;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  em {
    font-style: italic;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  button {
    border-radius: 0;
  }
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    -webkit-appearance: button;
  }
  input[type='date'],
  input[type='datetime-local'],
  input[type='month'],
  input[type='time'] {
    -webkit-appearance: listbox;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [role='button'] {
    cursor: pointer;
  }
  select {
    word-wrap: normal;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [tabindex='-1']:focus {
    outline: 0 !important;
  }
  fieldset {
    min-width: 0;
  }
  legend {
    max-width: 100%;
    white-space: normal;
    color: inherit;
    display: block;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
    resize: vertical;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  output {
    display: inline-block;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`;
