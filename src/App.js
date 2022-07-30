import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateTutorial from './components/CreateTutorial';
import ListTutorials from './components/ListTutorials';
import EditTutorial from './components/EditTutorial';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/list" component={ListTutorials} exact />
          <Route path="/create" component={CreateTutorial} exact />
          <Route path="/edit/:id" component={EditTutorial} exact />
        </Switch>

      </Router>

  );
};

export default App;