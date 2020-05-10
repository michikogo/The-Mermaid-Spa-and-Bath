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
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Route exact path='/The-Mermaid-Spa-and-Bath/#/' component={Home} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/about' component={About} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/products' exact component={Products} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/products/:id' component={ProductSpecific} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/treatments' component={Treatments} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/promo' component={Promo} />
      <Route path='/The-Mermaid-Spa-and-Bath/#/reservations' component={Reservations} />

    </HashRouter>
  );
}

export default App;
