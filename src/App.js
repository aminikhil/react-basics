import React from 'react';
import dora from './images/download.png'
import './App.css';
import Image1 from './MyImg';
import User from './components/User/User';

function Name({ name }) {
  return (<h4>{name}</h4>)
}

const styles = {
  mayur: "red",
  akram: "green"
}

function App() {

  var flag = false;

  const [counter, setCounter] = React.useState(0);

  const [num, setNum] = React.useState(1);

  function increment() {
    setCounter(counter + num);
  }

  function decrement() {
    if (counter <= 0) {
      alert("Invalid Number!")
    } else {
      setCounter(counter - num);
    }
  }

  const setNumValue = (event) => {
    setNum(parseInt(event.target.value))
  }

  function observe(n) {
    if (n == 10) {
      alert("Kya bat hai!");
    } else {
      console.log("Thoda aur.");
    }
  }

  React.useEffect(() => observe(counter), []);

  const user = [
    {
      name: "a"
    },
    {
      name: "b"
    }
    , {
      name: "c"
    }
  ]

  return (
    <div style={{ textAlign: "center" }}>
      <div className="App" style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => decrement()} disabled={counter <= 0}>-</button>
        <p style={{ margin: 4 }}>
          {counter}
        </p>
        <button onClick={increment}>+</button>

      </div>
      {
        user.map((i) => <User user={i} />)
      }
    </div>
  );
}

export default App;
