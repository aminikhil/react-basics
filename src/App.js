import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { getUsers, createUser } from './services/users';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer';
import { fetchUsers } from './redux/action';

const Home = (props) => {
  const [progress, setProgress] = React.useState(false);
  const dispatcher = useDispatch();
  const users = useSelector(state => state.users);

  React.useEffect(() => {
    getUsers().then((users) => {
      dispatcher(fetchUsers(users));
      console.log("Got users");
    });
  }, [dispatcher]);


  return <>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => <tr><td>{user.id}</td><td>{user.name}</td></tr>)
        }
      </tbody>
    </table>
    {users.length === 0 ? "Loading" : ""}
  </>
}

const AboutUs = () => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");

  function submitForm() {
    const user = {
      id: id,
      name: name
    }

    createUser(user).then(result => console.log(result));
  }

  return (<form>
    <input value={id} onChange={event => setId(event.target.value)} placeholder="ID" />
    <input value={name} onChange={event => setName(event.target.value)} placeholder="Name" />

    <button onClick={submitForm}>Submit</button>
  </form>);
}

const ContactUs = () => {
  return <div>This is a contact us section</div>
}

const PageNotFound = () => {
  return <div>Page not found</div>
}


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


function App() {

  return (
    <Provider store={store}>
      <Router>
        <ul>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about-us" activeClassName="active">About us</NavLink>
          <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router></Provider>

  );
}

export default App;
