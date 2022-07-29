import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import AddTutorial from './Components/AddTutorial';
import AllTutorials from './Components/AllTutorials';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Home />
        <AllTutorials/>
        <AddTutorial />
      </Router>

  );
};

export default App;