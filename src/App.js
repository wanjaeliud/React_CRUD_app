import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import AddTutorial from './Components/AddTutorial';
import AllTutorials from './Components/AllTutorials';
import EditTutorial from './Components/EditTutorial';

const App = () => {
  return (
      <Router>
        <Navbar />
        <AddTutorial />
        <Home />
        <AllTutorials/>
        <EditTutorial/>

      </Router>

  );
};

export default App;