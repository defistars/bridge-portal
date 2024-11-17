import { Container } from '@mui/material';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

type MainLayoutProps = { children: ReactNode };

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return <div>{children}</div>;
};

export default MainLayout;
