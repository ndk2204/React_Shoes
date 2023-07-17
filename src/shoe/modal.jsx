import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    console.log(this.props);
    const shoe = this.props.content;
    return (
      <div>
        <div
          className="modal"
          tabIndex={-1}
          style={{
            display: "block",
          }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{shoe.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    this.props.ResetModal();
                  }}
                />
              </div>
              <div className="modal-body pb-1">
                <img
                  style={{ width: "18rem" }}
                  src={shoe.image}
                  className="card-img-top"
                />
                <div className="content px-4">
                  <p className="upText">
                    <span>Alias: </span>
                    {shoe.alias}
                  </p>
                  <p>
                    <span>Description: </span>
                    {shoe.description}
                  </p>
                  <p>
                    <span>Price: </span>
                    {shoe.price}$
                  </p>
                  <p>
                    <span>Quantity: </span>
                    {shoe.quantity}
                  </p>
                </div>
              </div>
              <div className="modal-footer py-1">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    this.props.ResetModal();
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
