// Global import of React
import React, { Component } from 'react';
// Importing React Router to add page routes.
// Import third-party routing library (react-router-dom)
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import css file
import './App.css';
// import NavBar component
import NavBar from './components/NavBar';
// import Footer component
import Footer from './components/Footer';
// import containers/pages
import Home from './containers/Home';
import About from './containers/About';
import Events from './containers/Events';
import Donate from './containers/Donate';
import Gallery from './containers/Gallery';
import Connect from './containers/Connect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <div className="main">
              <div className="app-pages">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/donate" component={Gallery} />
                  <Route exact path="/gallery" component={Gallery} />
                  <Route exact path="/connect" component={Connect} />  
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
