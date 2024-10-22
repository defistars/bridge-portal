// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@bridge-portal/shared';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './Homepage';
import theme from '@bridge-portal/styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Transfer } from './pages/Transfer';
import MainLayout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: 'bridge',
    element: (
      <MainLayout>
        <Transfer />
      </MainLayout>
    ),
  },
]);

const queryClient = new QueryClient();

export function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
