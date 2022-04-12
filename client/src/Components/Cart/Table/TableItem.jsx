import React from "react";
import { Link } from "react-router-dom";

const TableItem = (props) => {
  const { item,detletFromCart, incrementQuantity} = props;
  return (
    <div className="table-item">
      <div className="item-info">
        <Link to={'/book/' + item.id} className="link"><img src={item.imageUrl} alt="item"/></Link>
        <div className="info">
          <span className="info-date">ISPN {item.date}</span>
          <Link to={'/book/' + item.id} className="info-name link">{item.name}</Link>
          <span className="info-author">{item.author}</span>
          
        </div>
      </div>
      <div className="item-quantity">
        <button className="minus">-</button>
        {item.quantity}
        <button className="plus"  onClick={()=> incrementQuantity(item.id)}>+</button>
      </div>
      <div className="item-price">${item.price}</div>
      <div className="item-total-price">${item.quantity * item.price}</div>
      <div className="item-action">
        <button onClick={()=>detletFromCart(item.id)}>
          <i className="ri-delete-bin-7-line"></i>
        </button>
      </div>
    </div>
  );
};

export default TableItem;
