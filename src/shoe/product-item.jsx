import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    // console.log(this.props)
    const item = this.props.sp;
    return (
      <div className="col-4 pb-4">
        <div className="card">
          <img
            onClick={() => {
              this.props.setModal();
              this.props.changeSanPham(item);
            }}
            src={this.props.url}
            className="card-img-top"
          />
          <div className="card-body pt-0">
            <h5
              onClick={() => {
                this.props.setModal();
                this.props.changeSanPham(item);
              }}
              className="card-title"
            >
              {this.props.name}
            </h5>
            <p className="card-text mb-2">{this.props.price}$</p>
            <a href="#" className="btn btn-dark">
              Add to cart
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
