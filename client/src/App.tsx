import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminPage from "./pages/AdminPage";
import "./main.css";
import { myContext } from "./pages/Context";
import Register from "./pages/Register";

function App() {
  const ctx = useContext(myContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {ctx ? (
          <>
            {ctx.isAdmin && <Route path="/admin" component={AdminPage} />}
            <Route path="/profile" component={Profile} />
          </>
        ) : (
          <>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
