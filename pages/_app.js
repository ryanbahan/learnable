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
  appState
  ? Router.push(appState.targetUrl)
  : Router.push('/app')
};

function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={process.env.baseURL[process.env.type]}
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

export default MyApp