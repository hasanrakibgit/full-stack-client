import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from "./Components/AddProducts/AddProducts";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import Deals from "./Components/Deals/Deals";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import Nomatch from "./Components/Nomatch/Nomatch";
import Order from "./Components/Order/Order";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <h3>Logged In User Name : {loggedInUser.displayName}</h3>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addProducts">
            <AddProducts/>
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
          <ManageProducts></ManageProducts>
          </PrivateRoute>
          
          <PrivateRoute path="/checkout/:productId">
            <Checkout />
          </PrivateRoute>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
