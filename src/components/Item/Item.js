import React from "react";
import Button from "../Button/Button";

import "./Item.css";

const Item = ({ item, remove, toggle }) => {
  return (
    <div
      className={
        item.completed
          ? "item item-completed"
          : "item item-pending"
      }
    >
      <div className="item-header">
        <div className="item-title">
          <h3 >{item.title}</h3>
        </div>
        <div className="group-buttons">
          <Button onClick={() => remove(item.id)}>Delete</Button>
          <Button onClick={() => toggle(item.id)}>Toggle</Button>
          <Button >Edit</Button>
        </div>
      </div>
      <p className="item-details">{item.details}</p>
    </div>
  );
};

export default Item;
