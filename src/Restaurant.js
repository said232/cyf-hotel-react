import React, { Component } from "react";

import Order from "./Order";
class Restaurant extends Component {
  state = {
    pizzas: 0,
    salads: 0
  };
  addpizza = () => {
    // const previousOrders = this.state.orders

    // const newOrders = previousOrders + 1

    // this.setState({ orders: newOrders })
    this.setState(previousState => ({ pizzas: previousState.pizzas + 1 }));
  };
  addsalad = () => {
    // const previousOrders = this.state.orders

    // const newOrders = previousOrders + 1

    // this.setState({ orders: newOrders })
    this.setState(previousState => ({ salads: previousState.salads + 1 }));
  };

  render() {
    const { pizzas } = this.state;
    const { salads } = this.state;
    return (
      <div>
        <h3>Restaurant Orders</h3>
        <ul>
          <Order
            orderType="pizzas"
            orders={pizzas}
            onAddOrder={this.addpizza}
          />
          <Order
            orderType="Salads"
            orders={salads}
            onAddOrder={this.addsalad}
          />
        </ul>
      </div>
    );
  }
}

export default Restaurant;
