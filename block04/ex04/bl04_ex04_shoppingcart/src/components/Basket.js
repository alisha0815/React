import React from "react";

const Basket = ({
  cartItems,
  increaseHandler,
  total,
  setTotal,
  decreaseHandler,
}) => {
  // const shippingPrice = itemsPrice > 500 ? 0 : 20;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 ? <div>Car Is Empty!</div> : null}</div>
      <p>Name: {cartItems.name}</p>
      <p>Price: {cartItems.price}</p>
      <div>
        <p>Quantity:{total}</p>
        <button onClick={increaseHandler}> + </button>
        <button onClick={decreaseHandler}> - </button>
        <button onClick={() => setTotal(0)}>Reset</button>
      </div>
      <p>
        Item Price : ${cartItems.price} * {total}
      </p>
      {/* <p>Shipping Price : {shippingPrice}</p> */}
    </aside>
  );
};
export default Basket;
