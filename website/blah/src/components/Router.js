import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import App from "../App"
import About from "./About";
import Game from "./Game";
import Footer from "./Footer";
import Contact from "./Contact";
import Impressum from "./Impressum";
import Cookies from "./Cookies";

const Router = () => {
  return(<HashRouter basename="/">
    <Nav/>
    <Switch>
      <div className="content">
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/impressum" component={Impressum} />
    <Route exact path="/cookies" component={Cookies} />
    </div>
    </Switch>
    <Footer/>
  </HashRouter>
)};

export default Router;