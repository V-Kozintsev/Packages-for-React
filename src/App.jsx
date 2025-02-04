import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Total from "./components/Total";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Магазин</h1>
      </header>
      <main className="app-main">
        <section className="product-list">
          <Products />
        </section>
        <aside className="cart-sidebar">
          <Cart />
          <Total />
        </aside>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Мой Магазин</p>
      </footer>
    </div>
  );
};

export default App;
