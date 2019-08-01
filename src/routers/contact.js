import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className='contactstyle'>
        <h2>Contact</h2>
        <br />
        <label> Full Name </label>
        <input type='text' value='First Name' />
      </div>
    );
  }
}

export default Contact;
