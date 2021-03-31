import React from "react";
import firebase from "firebase";
import Dashboard from "./Dashboard/Dashboard";
import { Redirect } from "react-router-dom";
import Login from "./Login/Login";

export default function PrivateRoute() {
  const [loginStatus, setLoginStatus] = React.useState(false);
  const [progress, setProgress] = React.useState(true);

  React.useState(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setLoginStatus(true);
        console.log("user logined");
      }
      setProgress(false);
    });
  }, []);

  return progress ? (
    "Loading...."
  ) : loginStatus ? (
    <Dashboard />
  ) : (
    <Redirect to="/login" />
  );
}
