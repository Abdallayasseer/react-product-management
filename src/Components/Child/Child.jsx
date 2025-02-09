import React, { Component } from "react";

class Child extends Component {
  render() {
    // Destructuring Products
    let { id, productName, productPrice, productCount, onSale } = this.props.products;

    return (
      <div className="col-12 col-sm-6 col-lg-4 mt-3">
        {/* Card */}
        <div className="card mb-4 position-relative">
          {onSale ?  <h5 className="bg-danger text-light p-2 rounded shadow position-absolute top-0 end-0 m-2">
              Sale
            </h5> : null}
          <div className="card-body">
            <h5 className="card-title">Product Name: {productName}</h5>
            <h6 className="card-text">Product Count: {productCount}</h6>
            <h6 className="card-text">Product Price: ${productPrice}</h6>

            <button
              onClick={() => this.props.updateCount(this.props.index, 1)}
              className="btn btn-info w-100 mt-3"
            >
              +
            </button>

            <button
              onClick={() =>
                productCount > 0 && this.props.updateCount(this.props.index, -1)
              }
              className="btn btn-warning w-100 mt-3"
              disabled={productCount === 0}
            >
              -
            </button>

            <button
              onClick={() => this.props.deleteProduct(id)}
              className="btn btn-danger w-100 mt-3"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
