import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { config } from '@bridge-portal/shared';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HomePage } from './pages/Homepage';
import theme from '@bridge-portal/styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Transfer } from './pages/Transfer';
import MainLayout from './layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
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
