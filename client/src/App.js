import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import CardsList from "./components/CardsList";

const App = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cars")
      .then(res => {
        console.log(res);
        setCars(res.data);
      })
      .catch(err => console.log(err));
  }, [cars]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/"
          render={props => <CardsList {...props} cars={cars} />}
        />
      </Switch>
    </div>
  );
};

export default App;
