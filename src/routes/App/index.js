import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styledNormalize from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { standardTheme } from '../../constants/styles';
import LoginPanel from '../LoginPanel';
import ResetForm from '../ResetPassword';
import SetPass from '../SetPassword';
import UserPanel from '../UserPanel';
import OrderPanel from '../OrderPanel';
import AccountSettings from '../AccountSettings';
import AffiliatePanel from '../AffiliatePanel';
import ShippingInfo from '../ShippingInfo';
import ROUTES from '../../constants/routesUrls';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.bodyBackground}!important;
    font-family: ${({ theme }) => theme.mainFontFamily};
    color: ${({ theme }) => theme.mainFontColor};
    position: relative;
  }

  main {
    font-family: ${({ theme }) => theme.mainFontFamily};
  }
  
    a, button {
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme }) => theme.mainFontColor};
    font-family: ${({ theme }) => theme.mainFontFamily};
  }

  a:hover {
    text-decoration: none;
  }
`;

function App() {
  const {
    app,
    resetPass,
    setPass,
    home,
    orders,
    settings,
    shipping,
    affiliate
  } = ROUTES;

  return (
    <>
      <ThemeProvider theme={standardTheme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path={app} component={LoginPanel} />
            <Route exact path={home} component={UserPanel} />
            <Route exact path={resetPass} component={ResetForm} />
            <Route exact path={setPass} component={SetPass} />
            <Route exact path={orders} component={OrderPanel} />
            <Route exact path={settings} component={AccountSettings} />
            <Route exact path={shipping} component={ShippingInfo} />
            <Route exact path={affiliate} component={AffiliatePanel} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
