import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';

const App = (props) => {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Dashboard} />
        
      </Router>
    </div>
  );
}

export default App;
