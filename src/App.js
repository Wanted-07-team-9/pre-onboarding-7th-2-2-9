import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Routers';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>LEVER</title>
      </Helmet>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
