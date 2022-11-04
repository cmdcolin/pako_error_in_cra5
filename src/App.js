import logo from "./logo.svg";
import "./App.css";
import { deflate, inflate } from "pako";
const input = deflate(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]));
let output;

try {
  output = inflate(input);
} catch (err) {
  console.log(err);
}

function App() {
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
