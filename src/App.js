import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

import NavBar from './components/navbar/navbar';
import ScheduleWrap from './components/Schedule/ScheduleWrap';
import Treatment from './components/Treatment/Treatment'

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact><ScheduleWrap /></Route>
        <Route path='/Treatment' exact><Treatment /></Route>
        <Route path='/team' exact><ScheduleWrap /></Route>
        <Route path='/endorsement' exact><ScheduleWrap /></Route>
        <Route path='/involvement' exact><ScheduleWrap /></Route>
      </Switch>
    </HashRouter>

  );
}

export default App;
