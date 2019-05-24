import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>


      </div>
    );
  }
}

export default App;
