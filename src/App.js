import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
// import "./App.css";
import Navigation from "./components/Navigation";
import detail from "./routes/movie-detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={detail} />
    </HashRouter>
  );
}

export default App;
