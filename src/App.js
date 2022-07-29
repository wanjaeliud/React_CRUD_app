import Home from './components/Home';
import Navbar from './components/Navbar';
import AddTutorial from './components/AddTutorial';
import AllTutorials from './components/AllTutorials';
import EditTutorial from './components/EditTutorial';
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