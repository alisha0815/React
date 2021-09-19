import React, { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const products = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, count: exist.count + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.count === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
    }
  };
  console.log(data);
  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
