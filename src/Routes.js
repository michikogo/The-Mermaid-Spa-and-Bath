import React from 'react';
import './Routes.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Pricing/Products';
import ProductSpecific from './pages/Pricing/ProductSpecific';
import Services from './pages/Pricing/Services';
import Voucher from './pages/Pricing/Voucher';
import Reservations from './pages/Reservations';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' exact component={Products} />
      <Route path='/products/:id' component={ProductSpecific} />
      <Route path='/services' component={Services} />
      <Route path='/voucher' component={Voucher} />
      <Route path='/reservations' component={Reservations} />

    </BrowserRouter>
  );
}

export default App;
