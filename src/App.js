import React, { Component } from "react";
import Parent from "./Components/Parent/Parent";

class App extends Component {
  state = {
    allProducts: [
      {
        id: "1",
        productName: "Iphone 11",
        productPrice: 2000,
        productCount: 10,
        onSale: false,
      },
      {
        id: "2",
        productName: "Iphone 22",
        productPrice: 4000,
        productCount: 20,
        onSale: true,
      },
      {
        id: "3",
        productName: "Iphone 33",
        productPrice: 4500,
        productCount: 30,
        onSale: false,
      },
      {
        id: "4",
        productName: "Iphone 44",
        productPrice: 4600,
        productCount: 40,
        onSale: true,
      },
      {
        id: "5",
        productName: "Iphone 55",
        productPrice: 6000,
        productCount: 50,
        onSale: false,
      },
      {
        id: "6",
        productName: "Iphone 66",
        productPrice: 7000,
        productCount: 80,
        onSale: true,
      },
    ],
  };
  deleteProduct = (ProductID) => {
    //Copy Array of allProduct
    let product = [...this.state.allProducts];
    //Filter the product array to exclude the one with the given id
    product = product.filter((item) => item.id !== ProductID);
    //Update the state with the new product array
    this.setState({ allProducts: product });
  };
  updateCount = (ProductIndex, steps) => {
    let product = [...this.state.allProducts];
    product[ProductIndex].productCount += steps;
    this.setState({ allProducts: product });
  };
  render() {
    return (
      <div>
        <Parent
          updateCount={this.updateCount}
          deleteProduct={this.deleteProduct}
          product={this.state.allProducts}
        />
      </div>
    );
  }
}

export default App;
