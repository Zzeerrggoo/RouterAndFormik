import React, { lazy, Suspense } from 'react';
import { routeConstants } from './common';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const { LOGIN, REGISTER } = routeConstants;

const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={[LOGIN.path, '/']}>
            <Login />
          </Route>
          <Route path={REGISTER.path}>
            <Registration />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
