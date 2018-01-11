import React from 'react';
import './EmailForm.css';

const EmailForm = (props) => {
  return (
    <div className="invisible" id="emailForm">
      <h2>Contact the Cottage</h2>
      <form>
        <h4>To: {props.to}</h4>
        <h4>From: <input type="text" id="emailFrom" placeholder="Your Email"/></h4>
        <h4><input type="text" id="emailSubject" placeholder="Subject Line" /></h4>
        <br />
        <textarea id="emailBody"> </textarea>
        <br />
        <button onClick={props.clickHandler} id="emailSendButton">Send</button>
      </form>
    </div>
  )
}

export default EmailForm;
