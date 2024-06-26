import { GlobalStyles } from '@/styles/global-styles';
import { theme } from '@/styles/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;<GlobalStyles></GlobalStyles>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
