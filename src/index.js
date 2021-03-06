import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
