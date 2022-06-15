import React from 'react';
//import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Layout } from './components/Layout/Layout';
import { AuthView } from './views/AuthView/AuthView';
import { RegistrationView } from './views/RegistrationView/RegistrationView';
import LibraryView from './views/LibraryView/LibraryView';
import { StatisticsView } from './views/StatisticsView/StatisticsView';
import { TrainingView } from './views/TrainingView/TrainingView';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/selectors/auth-selectors';
import operations from './redux/asyncThunks';

import Header from './components/Header';
import BooksReading from './components/BooksReading/Information/BooksReading';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              isLoggedIn ? <LibraryView /> : [<AuthView />, <BooksReading />]
            }
          />
          <Route
            path="registration"
            element={isLoggedIn ? <LibraryView /> : <RegistrationView />}
          />
          <Route
            path="library"
            element={
              isLoggedIn ? <LibraryView /> : [<AuthView />, <BooksReading />]
            }
          />
          <Route
            path="training"
            element={
              isLoggedIn ? <TrainingView /> : [<AuthView />, <BooksReading />]
            }
          />
          <Route
            path="statistics"
            element={
              isLoggedIn ? <StatisticsView /> : [<AuthView />, <BooksReading />]
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
