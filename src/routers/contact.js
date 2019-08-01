import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactstyle'>
        <h2>Contact</h2>
        <br />

        <label> Full Name </label>
        <input type='text' value='First Name' />

        <label> Email </label>
        <input type='email' value='Email' />

        <label> Mobile </label>
        <input type='number' value='Email' />

        <label> Message </label>
        <textarea />
      </div>
    );
  }
}

export default Contact;
