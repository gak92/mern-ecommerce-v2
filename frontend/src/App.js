import React, { useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import Home from './components/Home/Home';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, []);

  return (
   <Router>
    <Header />
    
    <Routes>
      <Route exact path='/' Component={Home} />
    </Routes>

    <Footer />
   </Router>
  );
}

export default App;
