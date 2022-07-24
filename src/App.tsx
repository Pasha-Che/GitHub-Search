/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavoritePages from './pages/FavoritePages';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite" element={<FavoritePages />} />
      </Routes>
    </>
  );
}

export default App;
