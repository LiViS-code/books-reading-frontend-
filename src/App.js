import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Layout } from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoutes';
import PublicRoute from './components/PublicRoutes';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from './redux/asyncThunks';

import Header from './components/Header';
import { Loader } from './components/Loader/Loader';
import BooksReading from './components/BooksReading/Information/BooksReading';

const AuthView = lazy(() => import('./views/AuthView/AuthView'));
const RegistrationView = lazy(() =>
  import('./views/RegistrationView/RegistrationView')
);
const LibraryView = lazy(() => import('./views/LibraryView/LibraryView'));
const StatisticsView = lazy(() =>
  import('./views/StatisticsView/StatisticsView')
);
const TrainingView = lazy(() => import('./views/TrainingView/TrainingView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <PublicRoute restricted>
                  <AuthView /> <BooksReading />
                </PublicRoute>
              }
            />
            <Route
              path="registration"
              element={
                <PublicRoute restricted>
                  <RegistrationView />
                </PublicRoute>
              }
            />
            <Route
              path="library"
              element={
                <PrivateRoute>
                  {' '}
                  <LibraryView />{' '}
                </PrivateRoute>
              }
            />
            <Route
              path="training"
              element={
                <PrivateRoute>
                  {' '}
                  <TrainingView />{' '}
                </PrivateRoute>
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute>
                  {' '}
                  <StatisticsView />{' '}
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
