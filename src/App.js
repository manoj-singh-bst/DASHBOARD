import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Delete from "./Pages/Delete";
import Home from "./Pages/Home";
import Update from "./Pages/Update";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Products" exact component={Products} />
          <Route path="/Update" exact component={Update} />
          <Route path="/Delete" exact component={Delete} />
          <Route path="/Cart" exact component={Cart} />
          <Delete />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
