// src/components/ItemList.tsx
import React from "react";
import type { Item } from "../types";
import ItemCard from "./ItemCard";

interface ItemListProps {
  items: Item[];
  onDelete: (index: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  if (items.length === 0) return <p>No Items yet</p>;
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <ItemCard item={item} onDelete={() => onDelete(index)} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
