import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Home />
      </Router>

  );
};

export default App;