import React from 'react';
import CustomerPortal from './customerportal';
import MerchantPortal from './merchantportal';

class PortalLoader extends React.Component {
  state = {
    user: 'customer',
    username: 'Andrew',
    password: 'testPassword',
    profilePicture: null,
    messages: [{user:'Conrad Coffees', message:`Let's meet at...`}, {user:`Kim's Kookies`, message:`Hope you enjoy the cookies!`}],
    searches: ['Cookies', 'Coffee', 'Bread'],
    reviews: [{merchant:`David's Doughs`, review:`Delicious!`, rating: `5`}],
    savedMerchants: []
  }

  render() {
    if(this.state.user == 'customer'){
      return(<CustomerPortal username={this.state.username} merchants={this.state.savedMerchants} searches={this.state.searches} messages={this.state.messages} reviews={this.state.reviews} />)
    }
    else {
       return(<MerchantPortal />)
    }
  }
}

export default PortalLoader;
