import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from 'styled-components';
import AppSettingsProvider from '../src/contexts/appSettingsContext';
import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/GlobalStyles';
import { Provider } from 'next-auth/client'

function MyApp(props) {
  const base = process.env.baseURL[process.env.type];
  const { Component, pageProps } = props
  const { session } = pageProps

  return (
    <Provider options={{ site: base }} session={ session } >
      <AppSettingsProvider>
        <ThemeProvider theme={ theme }>
          <MuiPickersUtilsProvider utils={ MomentUtils }>
            <GlobalStyles />
            <Component { ...pageProps } />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </AppSettingsProvider>
    </Provider>
  );
}

export default MyApp