import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import About from './Components/About.js/About';
import Product from './Components/Products/Product';
import Contact from './Components/Contacts/Contact';
import NotFound from './Components/NotFound/NotFound';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      </div>

  );
}
export default App;
