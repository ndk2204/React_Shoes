import React, { Component } from "react";
import ProductList from "./product-list";
import products from "./data.json";
import Modal from "./modal";

export default class ShoesStore extends Component {
  state = {
    productsDetail: products,
    modal: null,
    spChiTiet: {},
  };

  handleSanPhamChiTiet = (sp) => {
    this.setState({
      spChiTiet: sp,
    });
  };
  StateModal = () => {
    this.setState({
      modal: true,
    });
  };
  ResetModal = () => {
    this.setState({
      modal: null,
    });
  };

  render() {
    return (
      <>
        <ProductList
          productsData={products}
          setStateModal={this.StateModal}
          changeSanPham={this.handleSanPhamChiTiet}
        ></ProductList>
        {this.state.modal ? (
          <Modal
            content={this.state.spChiTiet}
            ResetModal={this.ResetModal}
          />
        ) : null}
      </>
    );
  }
}
