import { ThemeProvider } from 'styled-components';

import type { AppProps } from 'next/app';
import { GlobalStyles } from './global';
import { darkTheme, lightTheme } from '@config/themes/themes';
import { useTheme } from '@hooks/use-theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
