import React, { Component } from "react";

import Order from "./Order";
class Restaurant extends Component {
  state = {
    orders: 0
  };

  addOrder = () => {
    // const previousOrders = this.state.orders

    // const newOrders = previousOrders + 1

    // this.setState({ orders: newOrders })
    this.setState(previousState => ({ orders: previousState.orders + 1 }));
  };

  render() {
    const { orders } = this.state;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order
            orderType="pizzas"
            orders={orders}
            onAddOrder={this.addOrder}
          />
          <Order
            orderType="Salads"
            orders={orders}
            onAddOrder={this.addOrder}
          />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
