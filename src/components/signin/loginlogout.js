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
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    );
  }
}

export default LoginLogOut;
