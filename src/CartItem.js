import React from "react";

export default class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Phone",
      qty: 1,
      img: "",
    };
  }

  removeItem = () => {
    // this.setState({ qty: this.state.qty-- });
  };

  addItem = () => {
    // console.log("addItem");
  };

  render() {
    const { price, title, qty } = this.state;
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
            {title}
          </div>
          <div style={{ color: "#777" }}>Rs. {price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img
              alt="decrease"
              className="action-icons"
              src={"https://cdn-icons-png.flaticon.com/512/992/992683.png"}
              onClick={this.removeItem.bind(this)}
            />
            <img
              alt="increase"
              className="action-icons"
              src={"https://cdn-icons-png.flaticon.com/512/992/992651.png"}
              onClick={this.addItem.bind(this)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons.flaticon.com/png/512/2907/premium/2907762.png?token=exp=1659096698~hmac=8a04ff2ed7de015684f5260f81d13001"
            />
          </div>
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
