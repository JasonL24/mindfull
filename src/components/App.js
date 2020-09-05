import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import Activities from './Activities';
import Trivia from './activities/Trivia';
import Memory from './activities/Memory';
import Tasks from './activities/Tasks';

const App = (props) => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/activities" component={Activities} />
        <Route path="/trivia" component={Trivia} />
        <Route path="/memory" component={Memory} />
        <Route path="/tasks" component={Tasks} />
      </Router>
    </div>
  );
}

export default App;
