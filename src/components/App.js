import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>Homepage</Route>
        <Route exact path='/about'>About</Route>
        <Route path='/items/:itemId'>Item details</Route>
      </Switch>
    </Router>
  );
};

export default App;
