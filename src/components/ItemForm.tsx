import React, { useState } from "react";
import type { Item, Priority } from "../types/index";
import style from "../css-components/Form.module.css";

interface ItemFormProps {
  onAdd: (item: Item) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onAdd }) => {
  const [name, setName] = useState(``);
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [priority, setPriority] = useState<Priority>("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || price <= 0 || qty <= 0) {
      alert("Please provide valid inputs");
      return;
    }
    try {
      const newItem: Item = { name, price, qty, priority };
      //setShoppingList((prevItems) => [...prevItems, newItem]);
      onAdd(newItem);
      //reset
      setName("");
      setPrice(0);
      setQty(0);
      setPriority("Medium");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        required
      />
      <input
        type="number"
        placeholder="Qty"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value={"High"}>High</option>
        <option value={"Medium"}>Medium</option>
        <option value={"Low"}>Low</option>
      </select>
      <button type="submit">AddItem</button>
    </form>
  );
};

export default ItemForm;
