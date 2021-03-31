import { Switch, Route, NavLink } from "react-router-dom";

import Home from "../Home";
import CreateUser from "../CreateUser";
import UpdateUser from "../UpdateUser";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
const PageNotFound = () => {
  return <div>Page not found</div>;
};

export default function Dashboard() {
  const history = useHistory();

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log("Logout successfully.");
        history.push("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/create-user" activeClassName="active">
          Create User
        </NavLink>
        <NavLink to="/update-user" activeClassName="active">
          Update User
        </NavLink>
        <button onClick={logout}>Logout</button>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-user" component={CreateUser} />
        <Route path="/update-user" component={UpdateUser} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}
