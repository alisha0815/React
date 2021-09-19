import React from "react";

const Basket = ({ cartItems, onAdd, onRemove }) => {
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Car Is Empty!</div>}</div>
      {cartItems.map((item) => {
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.count} * ${item.price.toFixed(2)}
          </div>
        </div>;
      })}
    </aside>
  );
};
export default Basket;