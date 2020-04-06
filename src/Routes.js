import React from 'react';
import './Routes.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Footer from './common/footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Pricing/Products';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' component={Products} />
      <Route path='/footer' component={Footer} />
    </BrowserRouter>
  );
}

export default App;
