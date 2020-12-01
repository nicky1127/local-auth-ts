import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminPage from "./pages/AdminPage";
import "./main.css";
import Context from "./pages/Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Context>
    </BrowserRouter>
  );
}

export default App;
