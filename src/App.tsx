import { useState, useEffect } from "react";
import "./App.css";

type Priority = "High" | "Medium" | "Low";

interface Item {
  name: string;
  price: number;
  qty: number;
  priority: Priority;
}

const App = () => {
  //I use localStorage
  const [shoppingList, setShoppingList] = useState<Item[]>(() => {
    const savedList = localStorage.getItem("shoppingList");
    return savedList ? JSON.parse(savedList) : [];
  });

  const [name, setName] = useState(``);
  const [price, setPrice] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [priority, setPriority] = useState<Priority>("Medium");

  //Upate my local storage when item is added
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }, [shoppingList]);

  //Handle Form to add Item
  const AddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    //I make sure only valid inputs
    if (!name.trim() || price <= 0 || qty <= 0) {
      alert("Please provide valid inputs");
      return;
    }
    try {
      const newItem: Item = { name, price, qty, priority };
      setShoppingList((prevItems) => [...prevItems, newItem]);
      //reset
      setName("");
      setPrice(0);
      setQty(0);
      setPriority("Medium");
    } catch (error) {
      console.log(error);
    }
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
      <form onSubmit={AddNewItem}>
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

      <ol>
        {shoppingList.map((item, index) => (
          <li key={index}>
            <div className="ItemCard">
              <p>Name: {item.name}</p>
              <p>Price: {item.price}</p>
              <p>Qty:{item.qty}</p>
              <p>Priority: {item.priority}</p>
              <p>Sub-Total: Ksh {item.price * item.qty}</p>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
      <h2>Grand Total: Ksh {grandTotal}</h2>
    </>
  );
};

export default App;
