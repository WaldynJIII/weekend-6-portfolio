import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import adminForm from './../admin/adminForm';
class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path="/admin" component={adminForm} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
