import React from 'react';

class LoginLogOut extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? 'Log OUT' : 'Log IN';
    return (
      <>
        <h5>Simple Toggle button using React State</h5>
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default LoginLogOut;
