import { Route, Switch } from "react-router-dom";

import Login from "./components/login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Details";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
