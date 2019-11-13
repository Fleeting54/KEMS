import React from 'react';
import {GlobalStyle} from './Constants/GlobalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Common/Header/Header'
import Footer from './Common/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/AboutUs/AboutUs'
import Gallery from './pages/Gallery/Gallery'
import Reviews from './pages/Reviews/Reviews'
import Services from './pages/Services/Services'
import Contact from './pages/ContactUs/ContactUs'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
      <Header/>


          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/Gallery" component={Gallery}/>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/services" component={Services}/>
          <Route path="/contact" component={Contact}/>


      <Footer/>
      </Router>
    </div>
  );
}

export default App;
