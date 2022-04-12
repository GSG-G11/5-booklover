import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const Table = (props) => {
  const { cart, detletFromCart, incrementQuantity,decrementQuantity } = props;
  return (
    <div>
      <TableHeader />
      {cart.map((item) => {
        return (
          <TableItem
            item={item}
            key={item.id}
            detletFromCart={detletFromCart}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        );
      })}
    </div>
  );
};

export default Table;
