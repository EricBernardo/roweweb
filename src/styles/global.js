import { createGlobalStyle } from 'styled-components'

import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #2d3a4b;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  [disabled] {
      opacity: 0.65;
      cursor: progress;
  }

  button {
    cursor: pointer;
  }

  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background: #fff;
  }

  table th,
  table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }

  table thead {
    background: #ddd;
  }
  table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }

  table tbody + tbody {
    border-top: 2px solid #dee2e6;
  }

  table table {
    background-color: #fff;
  }
`;
