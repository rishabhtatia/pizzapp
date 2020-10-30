import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PizzaBuilder from "./container/PizzaBuilder/PizzaBuilder";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <Router>
      <div>
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/pizzaapp">Pizza App</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/pizzaapp">
            <div>
              <Layout>
                <PizzaBuilder />
              </Layout>
            </div>
          </Route>
          <Route path="/posts">
            <h1>Posts</h1>
            <Posts />
          </Route>
          <Route path="/">
            <h1>BLANK</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
