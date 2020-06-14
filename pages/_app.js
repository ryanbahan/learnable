import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../src/contexts/userContext';
import AppSettingsProvider from '../src/contexts/appSettingsContext';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';
import { Auth0Provider } from "../src/react-auth0-spa";
import config from "../src/auth_config.json";
import Router from 'next/router'

const onRedirectCallback = appState => {
  Router.push(
    appState && appState.targetUrl
      ? 'appState.targetUrl'
      : '/'
  )
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={'http://localhost:8080'}
        onRedirectCallback={onRedirectCallback}
      >
        <UserProvider>
          <AppSettingsProvider>
            <ThemeProvider theme={theme}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <GlobalStyles />
                <Component {...pageProps} />
              </MuiPickersUtilsProvider>
            </ThemeProvider>
          </AppSettingsProvider>
        </UserProvider>
      </Auth0Provider>
    );
  }
}
