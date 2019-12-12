import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import CustomerComponent from "./CustomerComponent/CustomerComponent";
import ShoppingBasketComponent from "./ShoppingBasketComponent/ShoppingBasketComponent";

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <nav>
              <ul>
                  <li>
                      <Link to="/customer">Customer</Link>
                  </li>
                  <li>
                      <Link to="/shoppingBasket">ShoppingBasket</Link>
                  </li>
              </ul>
          </nav>
          <div className="App">
              <p>DEMO</p>
              <Route path="/customer" exact render={() => <CustomerComponent/>} />
              <Route path="/shoppingBasket" exact render={() => <ShoppingBasketComponent/>} />
          </div>
      </BrowserRouter>
  );
};

export default App;
