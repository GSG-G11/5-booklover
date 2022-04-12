import React from "react";
import "./Table.css";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";

const Table = (props) => {
  const { cart, detletFromCart, incrementQuantity } = props;
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
          />
        );
      })}
    </div>
  );
};

export default Table;
