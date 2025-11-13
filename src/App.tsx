import { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import ItemForm from "./components/ItemForm";
import type { Item } from "./types";

const App = () => {
  //I use localStorage
  const [shoppingList, setShoppingList] = useState<Item[]>(() => {
    const savedList = localStorage.getItem("shoppingList");
    return savedList ? JSON.parse(savedList) : [];
  });

  //
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  const addItem = (item: Item) => {
    setShoppingList((prevItems) => [...prevItems, item]);
  };

  //remove item from list
  const deleteItem = (index: number) => {
    try {
      setShoppingList((prevItems) => prevItems.filter((_, i) => i !== index));
    } catch (error) {
      console.log(error);
    }
  };

  //I use the reduce array method to reduce to single value
  const grandTotal = shoppingList.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <>
      <div className="app">
        <h1>Shopping List App</h1>
        <ItemForm onAdd={addItem} />
        <ItemList items={shoppingList} onDelete={deleteItem} />
        <h2 className="grand-total">Grand Total: Ksh {grandTotal}</h2>
      </div>
    </>
  );
};

export default App;
