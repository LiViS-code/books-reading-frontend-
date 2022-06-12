import React from 'react';
//import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Layout } from './components/Layout/Layout';
import { AuthView } from './views/AuthView/AuthView';
import LibraryView from './views/LibraryView/LibraryView';
import { StatisticsView } from './views/StatisticsView/StatisticsView';
import { TrainingView } from './views/TrainingView/TrainingView';

import Header from './components/Header';
import BooksReading from './components/BooksReading/Information/BooksReading';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<BooksReading />} />
          <Route path="/" element={<AuthView />} />
          <Route path="library" element={<LibraryView />} />
          <Route path="training" element={<TrainingView />} />
          <Route path="statistics" element={<StatisticsView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
