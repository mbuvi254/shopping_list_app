// src/components/ItemCard.tsx
import React from "react";
import type { Item } from "../types";
import style from "../css-components/Item.module.css";

interface ItemCardProps {
  item: Item;
  onDelete: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete }) => {
  return (
    <div className={style.item_card}>
      <p>
        <strong>Name:</strong>
        {item.name}
      </p>
      <p>
        <strong>Price:</strong> Ksh {item.price}
      </p>
      <p>
        <strong>Qty:</strong>
        {item.qty}
      </p>
      <p>
        <strong>Priority:</strong>
        {item.priority}
      </p>
      <p>
        <strong>Sub-Total: Ksh </strong>
        {item.price * item.qty}
      </p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ItemCard;
