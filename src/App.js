import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import notFound from './pages/notFound';
import Navigation from './components/navigationBar';
import Jumbotron from './components/jumbotron';
import Footer from './components/footer';
 
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigation />
        <Jumbotron title="MU Stores"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route  component={notFound} />
        </Switch>
      <Footer />
          </Router>
    </React.Fragment>
  );
}

export default App;
