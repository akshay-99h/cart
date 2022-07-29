import React from "react";

export default class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" />
        </div>
        <div className="right-block" align="start">
          <div
            style={{
              fontSize: 25,
              color: "rgb(50,130,255)",
              fontWeight: "500",
            }}
          >
            Phone
          </div>
          <div style={{ color: "#777" }}>Rs. 999</div>
          <div style={{ color: "#777" }}>Qty: 1</div>
          <div className="cart-item-actions">{/*buttons*/}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    // border: 10,
    borderRadius: 8,
    background: "#ccc",
  },
};
