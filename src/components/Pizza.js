import React from "react";

import "../index.css";

function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? " sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <li className="pizza">
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold out".toUpperCase() : pizza.price}</span>
      </li>
    </div>
  );
}

export default Pizza;
