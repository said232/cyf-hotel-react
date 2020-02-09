import React from "react";

const RestaurantButton = ({ onAddOrder }) => (
  <button className="btn btn-primary" onClick={onAddOrder}>
    Add
  </button>
);
export default RestaurantButton;
