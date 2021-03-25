import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer';

import Home from './components/Home';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

const PageNotFound = () => {
  return <div>Page not found</div>
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="links">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/create-user" activeClassName="active">Create User</NavLink>
          <NavLink to="/update-user" activeClassName="active">Update User</NavLink>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create-user" component={CreateUser} />
          <Route path="/update-user" component={UpdateUser} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router></Provider>

  );
}

export default App;
