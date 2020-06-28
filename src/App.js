import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
