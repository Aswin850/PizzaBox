import React from "react";

import Order from "./Order";
import "../index.css";

function Footer() {
  const now = new Date();
  const hr = now.getHours();
  const openHr = 12;
  const closeHr = 22;
  const isOpen = hr >= openHr && hr <= closeHr;

  return isOpen ? (
    <Order date={now} />
  ) : (
    <footer className="footer">
      <div>{now.toLocaleTimeString()}. We're currently Closed!</div>
    </footer>
  );
}

export default Footer;
