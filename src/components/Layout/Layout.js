import { Outlet } from 'react-router-dom';
//import { Suspense } from "react";
import { Container } from './Layout.styled';
import Header from '../Header/Header';
export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
