import React from "react";

function Order({ date }) {
  return (
    <footer className="footer">
      <div className="order">
        {date.toLocaleTimeString()}. We're currently Open!
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Order;
