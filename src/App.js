import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Careers from "./components/Careers";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";


const App = () =>{
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to = "/" />
        </Switch>
        </>
    );
};

export default App;