import React from "react";
import List from "./components/List";

class App extends React.Component {
  render() {
    const products = [
      {
        product: "flash t-shirt",
        price: 27.5,
        category: "t-shirts",
        bestSeller: false,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61ZipyCaAKL._AC_UX385_.jpg",
        onSale: true,
      },
      {
        product: "batman t-shirt",
        price: 22.5,
        category: "t-shirts",
        bestSeller: true,
        image:
          "https://s1.thcdn.com/productimg/1600/1600/11676326-1444552242012324.png",
        onSale: false,
      },
      {
        product: "superman hat",
        price: 13.9,
        category: "hats",
        bestSeller: true,
        image:
          "https://banner2.kisspng.com/20180429/rqe/kisspng-baseball-cap-superman-logo-batman-hat-5ae5ef317f8366.9727520615250184175223.jpg",
        onSale: false,
      },
    ];
    return <List products={products} />;
  }
}

export default App;

// ## Exercise 3

// Create 3 class components, Main, List, and Item.

// In Main declare an array of categories; you should pass this array as it is to List,
// then in List you should map through the array and for each iteration you should pass each element of the array to Item in which you render it.
