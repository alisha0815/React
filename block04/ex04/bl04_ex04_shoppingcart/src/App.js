import React, { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const products = [
    {
      id: "1",
      name: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
    },
    {
      id: "2",
      name: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
    },
    {
      id: "3",
      name: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const onAdd = (product) => {
    console.log(product.name);
    setCartItems(product);
    console.log(cartItems);
  };

  const increaseHandler = () => {
    setTotal((preCount) => preCount + 1);
  };

  const decreaseHandler = () => {
    setTotal((preCount) => preCount - 1);
  };

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket
          onAdd={onAdd}
          cartItems={cartItems}
          increaseHandler={increaseHandler}
          total={total}
          setTotal={setTotal}
          decreaseHandler={decreaseHandler}
        />
      </div>
    </div>
  );
}

export default App;
