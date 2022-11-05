import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
* {
	box-sizing: border-box;
}
body {
	background-color: #F6F7F8;
  font-family: 'Roboto', sans-serif;
}
body * {
	background-color: transparent;
	letter-spacing: -0.5px;
}
h1, h2, h3, h4, h5 {
  font-family: 'Roboto', sans-serif;
}
:root {
    font-size: 10px;
  }
a {
	text-decoration: underline;
  cursor: pointer;
}
/* Layout */
html {
    max-width: 450px;
    margin: 0 auto;
}
`;
export default GlobalStyle;
