import './App.css';
import React from 'react';
import Home from './pages/Home';
import Detail from './pages/Detail';
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='character/:id' element={<Detail />}/>
    </Routes>
  );
}

export default App;
