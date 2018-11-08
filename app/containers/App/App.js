/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BirthdayPage from 'containers/BirthdayPage';
import Header from 'components/Header';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Switch>
      <Route exact path="/birthday" component={BirthdayPage} />
    </Switch>
  </div>
);

export default App;
