// import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AddTutorial from './Components/AddTutorial';
import AllTutorials from './Components/AllTutorials';
import EditTutorial from './Components/EditTutorial';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/all" component={AllTutorials} exact />
          <Route path="/add" component={AddTutorial} exact />
          <Route path="/edit/:id" component={EditTutorial} exact />
          {/*<Route component={NotFound} />*/}
        </Switch>

      </Router>

  );
};

export default App;