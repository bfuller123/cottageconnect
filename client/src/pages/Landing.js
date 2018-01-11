import React from "react";
import MainTwo from "./../components/Main";
import About from "./../components/About";
import Search from "./../components/Search";
import EmailForm from "./../components/Emailform";

class Landing extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cottageToEmailId: '',
      cottageToEmailName: ''
    }
  }

  clearEmailForm(){
    document.getElementById('emailFrom').value = '';
    document.getElementById('emailSubject').value = '';
    document.getElementById('emailBody').value = '';
    this.setState({cottageToEmailId: ''});
    this.setState({cottageToEmailName: ''});
  }

  selectCottage(e) {
    e.preventDefault();
    let cottageChosen = e.target.dataset.id;
    let cottageChosenName = e.target.dataset.name;
    this.setState({cottageToEmailId: cottageChosen});
    this.setState({cottageToEmailName: cottageChosenName});
    document.getElementById('emailForm').classList.remove("invisible");
    document.getElementById('emailForm').scrollIntoView(true);
  }

  sendEmail(e){
    e.preventDefault();
    console.log("Email Sent to " + this.state.cottageToEmailId);
    document.getElementById('emailForm').classList.add("invisible");
    document.getElementById('Search').scrollIntoView(true);
    // set route to send through the email
    this.clearEmailForm();
  }

  render() {
    return (
      <div>
        <MainTwo />
        <About />
        <Search clickHandler={(e) => {this.selectCottage(e)}}/>
        <EmailForm to={this.state.cottageToEmailName} clickHandler={(e) => {this.sendEmail(e)}}/>
      </div>
    )
  }
}

export default Landing;
