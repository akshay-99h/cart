import React from "react";
import CartItem from "./CartItem";

export default class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}
