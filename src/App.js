import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ManageItems from './components/pages/ManageItems';
import RequestItems from './components/pages/RequestItems';
import Info from './components/pages/Info';
import Home from './components/pages/Home';
import Header from './components/layout/Header';
import store from './store';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/manage-items" component={ManageItems} />
            <Route path="/request-items" component={RequestItems} />
            <Route path="/info" component={Info} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
