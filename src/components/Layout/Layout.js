import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './Layout.styled';
export const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
