import React from 'react';

class MerchantPortal extends React.Component {


  render() {
    let categories = this.props.categories.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    let goods = this.props.goods.map((item) => (
      <li><input type="text" value={item} /></li>
    ));

    return(
      <div>
      <h2>Welcome, {this.props.merchant}</h2>
      <h4>Your Address</h4>
      <input type="text" value={this.props.address} />
      <h4>Your Email</h4>
      <input type="text" value={this.props.email} />
      <h4>Type of Shops</h4>
      <ul>
        {categories}
      </ul>
      <button id="addNewCategory">Add</button>
      <h4>Your Merchandise</h4>
      <ul>
        {goods}
      </ul>
      <button id="addNewGood">Add</button>
      <button>Update</button>
      </div>
    )
  }
}

export default MerchantPortal;
