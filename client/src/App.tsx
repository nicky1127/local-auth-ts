import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact componet={HomePage} />
        <Route path="/admin" exact componet={AdminPage} />
        <Route path="/login" exact componet={Login} />
        <Route path="/profile" exact componet={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
