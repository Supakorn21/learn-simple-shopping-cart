import { useState } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CartPage from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/"  >
            <Home  />
        </Route>
        <Route path="/cart"  >
            <CartPage   />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
