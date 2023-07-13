import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home";
import { Supplements } from "./pages/supplements";
import { Cart } from "./pages/cart";
import { Success } from "./pages/success";
import { Cancel } from "./pages/cancel";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");

  const AddToCart = (supplement) => {
    let isAdded = false;
    cartItems.forEach((product) => {
      if (supplement.id === product.id) {
        isAdded = true;
      }
    });
    if (isAdded) {
      return;
    }
    setCartItems([
      ...cartItems,
      {
        ...supplement,
        quantity: 1,
      },
    ]);
  };
  return (
    <div className="App">
      <Router>
        <Navbar items={cartItems.length} setFilter={setFilterCategory} />
        <Routes>
          <Route path="/" element={<Home setFilter={setFilterCategory} />} />
          <Route
            path="/supplements"
            element={
              <Supplements
                AddToCart={AddToCart}
                filterCategory={filterCategory}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
