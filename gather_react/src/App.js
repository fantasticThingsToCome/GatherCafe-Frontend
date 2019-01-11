import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import MenusList from "./Components/MenusList";
import ItemsList from "./Components/ItemsList";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar /> {/* change to menu list/index */}
          <Route exact path="/" component={() => <Redirect to="/items" />} />
          <Route exact path="/login" component={() => <Login />} />
          <Route exact path="/menu" component={() => <MenusList />} />
          <Route exact path="/item" component={() => <ItemsList />} />
          <Route exact path="/userprofile" component={() => <UserProfile />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
