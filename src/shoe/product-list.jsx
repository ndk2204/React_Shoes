import React, { Component } from "react";
import ProductItem from "./product-item";
export default class ProductList extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <h3 style={{ fontWeight: "400" }} className="mt-2 mb-4">
          Shoes shop
        </h3>
        <div className="row">
          {this.props.productsData.map((item) => {
            return (
              <ProductItem
                setModal={this.props.setStateModal}
                changeSanPham={this.props.changeSanPham}
                sp={item}
                url={item.image}
                name={item.name}
                price={item.price}
                key={item.id}
              ></ProductItem>
            );
          })}
        </div>
      </div>
    );
  }
}
