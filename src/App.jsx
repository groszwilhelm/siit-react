import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Button from "./components/Button";

/**
 * Way of displaying counter output
 * Increment and decrement the counter
 */

function App() {
  // state variable to increment / decrement
  // document.querySelector -> obtain button references
  // attach add event listener to buttons 'click'
  // based on callback function increment / decrement variable
  // let count = 0;

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  console.log(count);

  return (
    // React fragment
    // <React.Fragment>
    <>
      <p className={isVisible ? "" : "hidden"}>
        {/* {
          isVisible
            ? <output> {count} </output>
            : ''
        } */}
        <output> {count} </output>
      </p>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}

      <Button onClick={increment}>
        <span>Increment</span>
      </Button>
      <Button onClick={decrement}> Decrement </Button>

      <div>
        {/* <button onClick={() => setIsVisible(true)}>Visible</button>
        <button onClick={() => setIsVisible(false)}>Invisible</button> */}
        <Button onClick={() => setIsVisible(true)}>
          Visible
        </Button>
        <Button title="Invisible" onClick={() => setIsVisible(false)}></Button>
      </div>
    </>
  );
}

export default App;

function useState2(defaultValue) {
  let variable = defaultValue;

  function setVariable(newValue) {
    variable = newValue;
    // React triggers re rendering of the component
  }

  return [variable, setVariable];
}
