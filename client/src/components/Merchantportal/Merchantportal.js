import React from 'react';
import "./MerchantPortal.css";

class MerchantPortal extends React.Component {

  render() {
    let categories = this.props.categories.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    let goods = this.props.goods.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    return(
      <div className="background">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12">
            <h2 className="MHede">Welcome, {this.props.merchant}</h2>
            <h4 className="MType">Shop Street Address:  <input type="text" onChange={this.props.inputChangeHandler} data-group="address" data-attribute="streetAddress1" value={this.props.address.streetAddress1} id="UserAddress" /></h4>
            <h4 className="MType">Shop Apt/Unit #:  <input type="text" onChange={this.props.inputChangeHandler} data-group="address" data-attribute="streetAddress2" value={this.props.address.streetAddress2} id="UserAddress" /></h4>
            <h4 className="MType">Shop City:  <input type="text" onChange={this.props.inputChangeHandler} data-group="address" data-attribute="city" value={this.props.address.city} id="UserAddress" /></h4>
            <h4 className="MType">Shop State:  <input type="text" onChange={this.props.inputChangeHandler} data-group="address" data-attribute="state" value={this.props.address.state} id="UserAddress" /></h4>
            <h4 className="MType">Shop Zip Code:  <input type="text" onChange={this.props.inputChangeHandler} data-group="address" data-attribute="zipCode" value={this.props.address.zipCode} id="UserAddress" /></h4>
            <h4 className="MType">Shop Email:  <input type="text" onChange={this.props.inputChangeHandler} data-group="user" data-attribute="email" value={this.props.email} id="UserEmail" /></h4>
            <h4 className="MType">Type of Shop:
              <ul>
                {categories}
              </ul></h4>
              <button id="categories" className="button" onClick={this.props.addCategoryBtnClick}>Add Types</button>
            <h4 className="MType">Products for Sale:
              <ul>
              {goods}
              </ul></h4>
              <button id="goods" className="button" onClick={this.props.addGoodBtnClick}>Add Products</button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12">
              <button id="updateMerchantButton" onClick={this.props.submitBtnClick}>Update Cottage</button>
          </div>
        </div>
      </div>
    )
  }
}

export default MerchantPortal;
