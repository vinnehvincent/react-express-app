import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import CreateComponent from "./pages/CreateComponent";
import EditComponent from "./pages/EditComponent";
import IndexComponent from "./pages/IndexComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div>
            <nav className="nav navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand">
                <Link to={"/"}> React Express App</Link>
              </a>
              <div className="" id="navbarSupportedContent">
                <ul className="nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/create"}>
                      Create
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/list"}>
                      List
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Switch>
              <Route exact path={"/create"} component={CreateComponent} />
              <Route path={"/edit/:id"} component={EditComponent} />
              <Route path={"/list"} component={IndexComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
