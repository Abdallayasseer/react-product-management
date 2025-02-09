import React, { Component } from "react";
import Child from "../Child/Child";

class Parent extends Component {
  render() {
    return (
      <section className="py-5 bg-dark">
        <div className="container">
          <div className="row">
            <h1 className="text-center text-white">
              Welcome to the Parent Component!
            </h1>
            {this.props.product.map((product, index) => (
              <Child
                index={index}
                key={index}
                deleteProduct={this.props.deleteProduct}
                updateCount={this.props.updateCount}
                products={product}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Parent;
