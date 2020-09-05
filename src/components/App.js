import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import Activities from './Activities';
import Trivia from './activities/Trivia';

const App = (props) => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/activities" component={Activities} />
        <Route path="/trivia" component={Trivia} />
      </Router>
    </div>
  );
}

export default App;
