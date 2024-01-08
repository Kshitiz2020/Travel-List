import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "charger", quantity: 1, packed: false },
  { id: 4, description: "headphone", quantity: 1, packed: true },
];

function App() {
  const [newItems, setNewItems] = useState([]);

  function handleClearList() {
    const confrimed = window.confirm(
      "Are you sure you want to delete the list? "
    );
    if (confrimed) setNewItems((newItems) => []);
  }

  function handleAddItems(item) {
    setNewItems((newItems) => [...newItems, item]);
  }

  function handleDeleteItems(id) {
    setNewItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setNewItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={newItems}
        onDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={newItems} />
    </div>
  );
}
/* 
function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Packaging for your trip</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You are ready to go✈️"
          : `🧳 You have ${numItems} items in your list, and you already packed
        ${numPacked} ${Percentage}%`}
      </em>
    </footer>
  );
} */

export default App;
