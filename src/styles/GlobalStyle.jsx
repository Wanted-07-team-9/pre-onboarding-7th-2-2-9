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
h1 {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #3A474E;
}
p {
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 500;
}
a {
	text-decoration: underline;
  cursor: pointer;
}
/* Layout */
html {
    margin: 0 auto;
}
`;
export default GlobalStyle;
