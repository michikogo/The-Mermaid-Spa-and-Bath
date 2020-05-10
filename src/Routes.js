import React from 'react';
import './Routes.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductSpecific from './pages/ProductSpecific';
import Treatments from './pages/Treatments';
import Promo from './pages/Promo';
import Reservations from './pages/Reservations';

function App() {
  return (
    <HashRouter basename='/The-Mermaid-Spa-and-Bath/#/'>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/products' exact component={Products} />
      <Route path='/products/:id' component={ProductSpecific} />
      <Route path='/treatments' component={Treatments} />
      <Route path='/promo' component={Promo} />
      <Route path='/reservations' component={Reservations} />

    </HashRouter>
  );
}

export default App;
