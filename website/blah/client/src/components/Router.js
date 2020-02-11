import React,{useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import App from "../App"
import About from "./About";
import Game from "./Game";
import CommentSection from "./Comments/CommentSection";
import Footer from "./Footer";
import Contact from "./Contact";
import Impressum from "./Impressum";
import Cookies from "./Cookies";

const Router = () => {
  return(<BrowserRouter basename='/'>
    <Nav/>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/game" component={Game} />
    <Route exact path="/comments" component={CommentSection}></Route>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/impressum" component={Impressum} />
    <Route exact path="/cookies" component={Cookies} />
    </Switch>
    <Footer/>
  </BrowserRouter>
)};

export default Router;