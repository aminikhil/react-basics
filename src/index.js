import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8YDIM2nBZOY0HfyFp42E3hx2hZDtIuGE",
  authDomain: "college-club.firebaseapp.com",
  databaseURL: "https://college-club.firebaseio.com",
  projectId: "college-club",
  storageBucket: "college-club.appspot.com",
  messagingSenderId: "573761912720",
  appId: "1:573761912720:web:1dadb1fe1245cf783a3d15"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
