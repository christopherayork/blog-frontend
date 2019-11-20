import React, { createContext } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from '../components/Home';
import About from "../components/About";
import Contact from "../components/Contact";

const Router = props => {


  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </BrowserRouter>
    </>
  );
};

export default Router;