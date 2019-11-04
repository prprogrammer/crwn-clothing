import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = props => (
  <div>
    <h1>HATS PAGE</h1>
    {console.log(props)}
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;
