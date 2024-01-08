import React, { useState } from "react";

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
}
export default Stats;
