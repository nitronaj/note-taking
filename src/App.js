import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from './auth/Auth';
import {PrivateRoute} from './auth/PrivateRoute';
import { Dashboard } from './Components/Dashboard';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute path="/" component={Dashboard} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Router>
    </AuthProvider>
  );
}

export default App;
