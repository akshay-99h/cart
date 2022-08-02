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
    this.testing();
  }

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });
  //   promise.then(() => {
  //     // setState acts like asynchronous update here as well
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //   });
  //   console.log(this.state);
  // }

  removeItem = () => {
    if (this.state.qty > 1) {
      this.setState({ qty: this.state.qty - 1 });
    } else return;
  };
  addItem = () => {
    this.setState({ qty: this.state.qty + 100 });
    this.setState({ qty: this.state.qty + 10 });
    this.setState({ qty: this.state.qty + 1 }, () => {
      console.log(this.state.qty);
    });
    //all the setState calls will be merged into a single call
    //due to #batching and that is why our component will
    //be re-rendered only once
    //merge shallowly* > takes the last call and the last object
    //only the +1 will be considered

    //setState call is asynchronous
    //the second argument is a callback function which will be
    //called after the setState is done
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
//do not call setState in render as setState calls render itself
//and that will create a recursive loop, causing stack overflow
const styles = {
  image: {
    height: 110,
    width: 110,
    // border: 10,
    borderRadius: 8,
    background: "#ccc",
  },
};
