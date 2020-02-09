import React from "react";
import RestaurantButton from "./RestaurantButton";
const Order = ({ onAddOrder, orderType, orders }) => {
  return (
    <li>
      {orderType}:{orders}
      <RestaurantButton onAddOrder={onAddOrder} />
    </li>
  );
};
export default Order;
