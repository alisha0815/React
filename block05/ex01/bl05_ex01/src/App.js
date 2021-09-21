import React, { useState } from "react";

function App() {
  const products = [
    {
      product: "flash t-shirt",
      price: 27.5,
      category: "t-shirts",
      bestSeller: false,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
      onSale: true,
      qty: 1,
    },
    {
      product: "batman t-shirt",
      price: 22.5,
      category: "t-shirts",
      bestSeller: true,
      image:
        "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
      onSale: false,
      qty: 1,
    },
    {
      product: "superman hat",
      price: 13.9,
      category: "hats",
      bestSeller: true,
      image:
        "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
      onSale: false,
      qty: 1,
    },
  ];

  const [category, setCategory] = useState([]);
  const inputHandler = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    console.log(category);
  };

  const clicked = () => {
    products.map((product) => {
      if (product.category === category) {
        console.log(`${product.product} is in stock Hurry!`);
      }

      if (category === "all") {
        console.log("all");
      } else if (product.category !== category) {
        console.log("sorry, no matched");
      }
    });
  };

  return (
    <div>
      <form>
        <h1>Category</h1>
        <input onChange={inputHandler} text={category} />
        <button onClick={clicked}>Click</button>
        <p></p>
      </form>
    </div>
  );
}

export default App;
