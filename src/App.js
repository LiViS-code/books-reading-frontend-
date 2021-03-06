import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Layout } from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoutes';
import PublicRoute from './components/PublicRoutes';
import { PrimaryButton } from './components/Buttons/PrimaryButton.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from './redux/asyncThunks';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import BooksReading from './components/BooksReading/Information/BooksReading';
import { useMediaQuery } from './components/Header/hooks/useMediaQuery';
import { getIsFetchCurrentUser } from './redux/selectors/auth-selectors';
import { getIsRegistered } from './redux/selectors/auth-selectors';

import queryString from 'query-string';

const AuthView = lazy(() => import('./views/AuthView/AuthView'));
const RegistrationView = lazy(() =>
  import('./views/RegistrationView/RegistrationView')
);
const LibraryView = lazy(() => import('./views/LibraryView/LibraryView'));
const StatisticsView = lazy(() =>
  import('./views/StatisticsView/StatisticsView')
);
const TrainingView = lazy(() => import('./views/TrainingView/TrainingView'));
// const NotFound = lazy(() => import('./views/NotFound/NotFound'));

function App() {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);
  const isRegistered = useSelector(getIsRegistered);

  const location = useLocation();

  let {
    token = null,
    email = null,
    name = null,
  } = queryString.parse(location.search);

  useEffect(() => {
    if (token && email && name) {
      dispatch(operations.googleLogin({ token, email, name }));
    }
  }, [dispatch, token, email, name]);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  const isMatches = useMediaQuery('(max-width: 768px)');
  const NotFound = () => {
    return (
      <>
        <h1>NotFound</h1>
        <PrimaryButton>
          <Link to="/">Go home</Link>
        </PrimaryButton>
      </>
    );
  };

  return (
    !isFetchCurrentUser && (
      <>
        <GlobalStyle />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <PublicRoute restricted>
                    {isMatches ? <BooksReading /> : <AuthView />}
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <AuthView />
                  </PublicRoute>
                }
              />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted>
                    {isRegistered ? (
                      <Navigate to="/login" />
                    ) : (
                      <RegistrationView />
                    )}
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}

export default App;
