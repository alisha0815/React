import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SingleProduct from "./components/SingleProduct";
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
  let year = 2020;
  const renderProducts = (arr) => {
    return arr.map((ele, i) => {
      return <SingleProduct product={ele} key={i} />;
    });
  };

  return (
    <div className="App">
      <Header />
      {renderProducts(products)}
      <Footer currentYear={year} />
    </div>
  );
}

export default App;
