import React from 'react';
import Navigation from './components/Navigation'
import {Routes, Route} from "react-router-dom"
import FavoritesPages from './pages/FavoritesPages';
import HomePage from './pages/HomePage';

function App() {

  
  return (
    <>
    
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/" element={<FavoritesPages/>} />
          </Routes>
          </>
  );
}

export default App;
