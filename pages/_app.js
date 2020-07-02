import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../src/contexts/userContext';
import AppSettingsProvider from '../src/contexts/appSettingsContext';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';

function MyApp(props) {
  const { Component, pageProps } = props

  return (
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
  );
}

export default MyApp