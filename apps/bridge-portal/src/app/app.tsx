// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import NxWelcome from './nx-welcome';

import * as React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './Homepage';
import theme from '@bridge-portal/styles/theme';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <main>
          <HomePage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
