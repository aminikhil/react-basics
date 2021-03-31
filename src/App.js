import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer';

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import firebase from 'firebase';
import PrivateRoute from './components/PrivateRoute';

const PageNotFound = () => {
  return <div>Page not found</div>
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {


  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
