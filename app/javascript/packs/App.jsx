import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      {/* <Route component={noMatch} /> */}
    </Switch>
  );
};

export default App;
