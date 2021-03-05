import { useMachine } from "@xstate/react";

import { state } from "./state.machine";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [current, send] = useMachine(state, { devTools: true });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
