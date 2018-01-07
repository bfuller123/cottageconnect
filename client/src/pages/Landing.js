import React from "react";
import MainTwo from "./../components/Main";
import About from "./../components/About";
import Search from "./../components/Search";
import axios from 'axios';

class Landing extends React.Component {
  sendInfo(e){
    e.preventDefault();
    axios({
      method: 'post',
      url: '/send/info',
      params: {
        firstName: 'Brett',
        lastName: 'Fuller'
      }
    })
    .then(function(response){
      console.log(response.data);
    })
  }

  render() {
    return (
      <div>
        <MainTwo />
        <About />
        <Search searchBtnHandleClick={this.sendInfo}/>
      </div>
    )
  }
}

export default Landing;
