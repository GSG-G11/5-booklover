import React from "react";

const TableItem = (props) => {
  const { item } = props;
  console.log(item);
  return (
    <div className="table-item">
      <div className="item-info">
        <img src={item.imageUrl} alt="item"/>
        <div className="info">
          <span className="info-date">{item.date}</span>
          <span className="info-name">{item.name}</span>
          <span className="info-author">{item.author}</span>
          
        </div>
      </div>
      <div className="item-quantity">
        <button className="minus">-</button>
        {item.quantity}
        <button className="plus">+</button>
      </div>
      <div className="item-price">${item.price}</div>
      <div className="item-total-price">${item.quantity * item.price}</div>
      <div className="item-action">
        <button>
          <i className="ri-delete-bin-7-line"></i>
        </button>
      </div>
    </div>
  );
};

export default TableItem;
